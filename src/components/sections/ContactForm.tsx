"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { trackLead } from "../Analytics";

const interests = [
  "Google Ads",
  "Meta Ads",
  "Criação de site ou landing page",
  "CRM com inteligência artificial (Pipeflow)",
  "Automação comercial",
  "Inteligência de dados",
  "Ainda não sei / quero um diagnóstico",
];

type Status = { kind: "idle" | "sending" | "success" | "error" | "demo"; message?: string };

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

function readAttribution() {
  try {
    const p = new URLSearchParams(window.location.search);
    return Object.fromEntries(UTM_KEYS.flatMap((k) => (p.get(k) ? [[k, p.get(k)!.slice(0, 200)]] : [])));
  } catch {
    return {};
  }
}

const field =
  "w-full rounded-xl bg-sand-50 px-4 py-3 text-[15px] text-ink-900 ring-1 ring-ink-900/10 placeholder:text-zinc-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot

    const payload = {
      nome: String(data.get("nome") ?? "").trim(),
      empresa: String(data.get("empresa") ?? "").trim(),
      telefone: String(data.get("telefone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      interesse: String(data.get("interesse") ?? ""),
      mensagem: String(data.get("mensagem") ?? "").trim(),
      consentimento: data.get("consentimento") === "on",
      pagina: typeof window !== "undefined" ? window.location.href.split("?")[0] : "",
      ...readAttribution(),
    };

    if (site.contact.formEndpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(site.contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
        trackLead("formulario");
        form.reset();
        setStatus({ kind: "success", message: "Recebemos sua mensagem. Em breve um especialista da Gravon entrará em contato." });
      } catch {
        setStatus({ kind: "error", message: "Não foi possível enviar agora. Tente novamente em instantes." });
      }
      return;
    }

    const text = [
      `Olá, Gravon Company! Meu nome é ${payload.nome}${payload.empresa ? `, da empresa ${payload.empresa}` : ""}.`,
      payload.interesse ? `Tenho interesse em: ${payload.interesse}.` : "",
      payload.mensagem,
    ].filter(Boolean).join("\n");
    const wa = whatsappLink(text);
    if (wa) {
      trackLead("formulario_whatsapp");
      window.open(wa, "_blank", "noopener,noreferrer");
      setStatus({ kind: "success", message: "Abrimos o WhatsApp com sua mensagem pronta para envio." });
      return;
    }

    setStatus({ kind: "demo", message: "Versão de demonstração: o envio do formulário ainda não foi configurado." });
  }

  const busy = status.kind === "sending";

  return (
    <form id="formulario" onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-900/5 sm:p-8" aria-describedby="form-status" noValidate={false}>
      <h3 className="text-xl font-bold text-ink-900">Fale com um especialista</h3>
      <p className="mt-1 text-sm text-zinc-500">Campos com * são obrigatórios.</p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-zinc-700">Nome *</span>
          <input name="nome" required autoComplete="name" maxLength={120} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-zinc-700">Empresa</span>
          <input name="empresa" autoComplete="organization" maxLength={120} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-zinc-700">WhatsApp *</span>
          <input name="telefone" required type="tel" inputMode="tel" autoComplete="tel" pattern="[\d\s\(\)\+\-]{10,20}" title="Informe DDD e número" placeholder="(DDD) 00000-0000" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-zinc-700">E-mail</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm text-zinc-700">Interesse</span>
          <select name="interesse" defaultValue="" className={`${field} appearance-none`}>
            <option value="" disabled>Selecione uma opção</option>
            {interests.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm text-zinc-700">Mensagem</span>
          <textarea name="mensagem" rows={4} maxLength={2000} className={`${field} resize-y`} placeholder="Conte brevemente sobre sua empresa e seu objetivo." />
        </label>
        {/* Honeypot anti-spam */}
        <label className="hidden" aria-hidden>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-zinc-600">
        <input type="checkbox" name="consentimento" required className="mt-1 size-4 accent-[#c99a3a]" />
        <span>Autorizo a Gravon Company a entrar em contato comigo sobre esta solicitação. *</span>
      </label>

      <button
        type="submit"
        disabled={busy}
        className="mt-7 min-h-[48px] w-full rounded-xl bg-ink-900 px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-ink-700 active:scale-[.98] disabled:opacity-60"
      >
        {busy ? "Enviando…" : "Enviar mensagem"}
      </button>

      <p id="form-status" role="status" aria-live="polite" className={`mt-4 min-h-5 text-sm ${status.kind === "error" ? "text-red-600" : status.kind === "success" ? "text-emerald-700" : "text-gold-700"}`}>
        {status.message}
      </p>
    </form>
  );
}
