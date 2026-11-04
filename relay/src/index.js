/**
 * Gravon Lead Relay — Cloudflare Worker.
 * Recebe o formulário do pop-up do site (inclusive da prévia no GitHub Pages) e repassa ao Zapier.
 * A URL do webhook do Zapier fica APENAS no segredo ZAPIER_WEBHOOK_URL do Worker.
 *
 * Variáveis:
 *   ZAPIER_WEBHOOK_URL (secret)  https://hooks.zapier.com/hooks/catch/...
 *   ALLOWED_ORIGINS    (var)     origens permitidas, separadas por vírgula
 */

const MAX_BYTES = 8 * 1024;
const REQUIRED = ["event_id", "faturamento", "name", "whatsapp", "instagram", "segmento"];
const OPTIONAL = ["cta", "form", "landing_url", "submitted_at", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

function cors(origin, allowed) {
  const ok = origin && allowed.includes(origin);
  return {
    ...(ok ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" } : {}),
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(status, body, headers) {
  return new Response(JSON.stringify(body), { status, headers: { ...headers, "Content-Type": "application/json" } });
}

export function validate(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { error: "invalid_body" };
  const out = {};
  for (const k of REQUIRED) {
    const v = typeof input[k] === "string" ? input[k].trim() : "";
    if (!v) return { error: `missing_${k}` };
    if (v.length > 300) return { error: `too_long_${k}` };
    out[k] = v;
  }
  const digits = out.whatsapp.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) return { error: "invalid_whatsapp" };
  out.whatsapp = digits;
  if (!/^@?[A-Za-z0-9._]{1,30}$/.test(out.instagram)) return { error: "invalid_instagram" };
  for (const k of OPTIONAL) {
    if (typeof input[k] === "string" && input[k].trim()) out[k] = input[k].trim().slice(0, 500);
  }
  return { data: out };
}

export default {
  async fetch(request, env) {
    const allowed = String(env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const origin = request.headers.get("Origin") || "";
    const headers = cors(origin, allowed);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (request.method !== "POST") return json(405, { error: "method_not_allowed" }, headers);
    if (!allowed.includes(origin)) return json(403, { error: "origin_not_allowed" }, headers);
    if (!env.ZAPIER_WEBHOOK_URL) return json(503, { error: "not_configured" }, headers);

    const text = await request.text();
    if (text.length > MAX_BYTES) return json(413, { error: "too_large" }, headers);
    let body;
    try { body = JSON.parse(text); } catch { return json(400, { error: "invalid_json" }, headers); }
    const { data, error } = validate(body);
    if (error) return json(400, { error }, headers);

    const payload = {
      ...data,
      // Chaves compatíveis com o inbound do Pipeflow (revenue/service/source/form_origin)
      revenue: data.faturamento,
      service: data.segmento,
      source: "Site Gravon Company",
      form_origin: origin,
    };
    try {
      const res = await fetch(env.ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) return json(502, { error: "upstream_failed" }, headers);
    } catch {
      return json(502, { error: "upstream_unreachable" }, headers);
    }
    return json(200, { ok: true, event_id: data.event_id }, headers);
  },
};
