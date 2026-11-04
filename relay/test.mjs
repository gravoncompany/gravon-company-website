import { test } from "node:test";
import assert from "node:assert/strict";
import worker, { validate } from "./src/index.js";

const ORIGIN = "https://gravoncompany.github.io";
const env = { ALLOWED_ORIGINS: ORIGIN, ZAPIER_WEBHOOK_URL: "https://hooks.zapier.com/hooks/catch/000/test/" };
const good = { event_id: "e1", faturamento: "Faixa X", name: "Ana Teste", whatsapp: "(11) 98888-7777", email: "ana@exemplo.com", instagram: "@ana.teste", segmento: "Outro", company: "Empresa X", utm_source: "google" };
const req = (body, origin = ORIGIN, method = "POST") => new Request("https://relay.example/", { method, headers: { Origin: origin, "Content-Type": "application/json" }, body: method === "POST" ? JSON.stringify(body) : undefined });

test("repassa ao Zapier com os campos das três etapas", async () => {
  let sent;
  globalThis.fetch = async (url, init) => { sent = { url, body: JSON.parse(init.body) }; return new Response('{"status":"success"}', { status: 200 }); };
  const res = await worker.fetch(req(good), env);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("Access-Control-Allow-Origin"), ORIGIN);
  assert.equal(sent.url, env.ZAPIER_WEBHOOK_URL);
  for (const k of ["faturamento", "name", "whatsapp", "email", "instagram", "company", "segmento", "event_id", "utm_source"]) assert.ok(sent.body[k], k);
  assert.equal(sent.body.whatsapp, "11988887777");
  assert.equal(sent.body.revenue, "Faixa X");
  assert.equal(sent.body.service, "Outro");
});

test("recusa origem não permitida", async () => {
  const res = await worker.fetch(req(good, "https://outro.site"), env);
  assert.equal(res.status, 403);
});

test("sem webhook configurado → 503", async () => {
  const res = await worker.fetch(req(good), { ALLOWED_ORIGINS: ORIGIN });
  assert.equal(res.status, 503);
});

test("falha no Zapier → 502 (o site mantém as respostas e permite tentar de novo)", async () => {
  globalThis.fetch = async () => new Response("err", { status: 500 });
  const res = await worker.fetch(req(good), env);
  assert.equal(res.status, 502);
});

test("validações", () => {
  assert.equal(validate({ ...good, email: "x" }).error, "invalid_email");
  assert.equal(validate({ ...good, whatsapp: "123" }).error, "invalid_whatsapp");
  assert.equal(validate({ ...good, segmento: "" }).error, "missing_segmento");
  assert.equal(validate({ ...good, instagram: "a b" }).error, "invalid_instagram");
});

test("preflight CORS", async () => {
  const res = await worker.fetch(req(null, ORIGIN, "OPTIONS"), env);
  assert.equal(res.status, 204);
});
