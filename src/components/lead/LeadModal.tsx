"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Check, CheckCircle2, Loader2, X } from "lucide-react";
import { site } from "@/lib/site";
import {
  contactFields,
  emptyAnswers,
  maskPhone,
  optionsConfirmed,
  revenueOptions,
  segmentOptions,
  steps,
  validateField,
  type LeadAnswers,
} from "@/content/lead-form";
import { trackLead } from "../Analytics";

type Status = "idle" | "sending" | "success" | "error";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
const stepKeys: (keyof LeadAnswers)[][] = [["revenue"], ["name", "whatsapp", "email", "instagram", "company"], ["segment"]];

function newId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function LeadModal({ open, source, onClose }: { open: boolean; source: string; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<LeadAnswers>(emptyAnswers);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadAnswers, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [eventId, setEventId] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  // Abrir/fechar: foco, rolagem e Esc.
  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => dialogRef.current?.querySelector<HTMLElement>("[data-autofocus], input, button[role=radio]")?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "sending") close();
      if (e.key === "Tab" && dialogRef.current) {
        const f = [...dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), input, [tabindex='0']")];
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, step, status]);

  function close() {
    onClose();
    lastFocus.current?.focus?.();
    // Após envio aceito, a próxima abertura começa do zero; caso contrário, as respostas ficam.
    if (status === "success") {
      setAnswers(emptyAnswers);
      setStep(0);
      setStatus("idle");
      setEventId("");
    }
  }

  function set<K extends keyof LeadAnswers>(key: K, value: string) {
    setAnswers((a) => ({ ...a, [key]: key === "whatsapp" ? maskPhone(value) : value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: validateField(key, key === "whatsapp" ? maskPhone(value) : value) }));
  }

  function validateStep(i: number) {
    const errs: Partial<Record<keyof LeadAnswers, string>> = {};
    for (const k of stepKeys[i]) {
      const m = validateField(k, answers[k]);
      if (m) errs[k] = m;
    }
    setErrors(errs);
    const firstBad = Object.keys(errs)[0];
    if (firstBad) dialogRef.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
    return !firstBad;
  }

  function next() {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function submit() {
    for (let i = 0; i < steps.length; i++) {
      if (!validateStep(i)) { setStep(i); return; }
    }
    const id = eventId || newId();
    setEventId(id);
    setStatus("sending");
    setErrorMsg("");
    if (!site.contact.leadEndpoint) {
      setStatus("error");
      setErrorMsg("Envio ainda não conectado nesta prévia. Suas respostas foram mantidas.");
      return;
    }
    let utms: Record<string, string> = {};
    try {
      const p = new URLSearchParams(window.location.search);
      utms = Object.fromEntries(UTM_KEYS.flatMap((k) => (p.get(k) ? [[k, p.get(k)!.slice(0, 200)]] : [])));
    } catch { /* ignora */ }
    const ig = answers.instagram.trim().replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/\/$/, "");
    const payload = {
      event_id: id,
      form: "site-gravon-popup",
      cta: source,
      faturamento: answers.revenue,
      name: answers.name.trim(),
      whatsapp: answers.whatsapp.replace(/\D/g, ""),
      email: answers.email.trim(),
      instagram: ig.startsWith("@") ? ig : `@${ig}`,
      company: answers.company.trim(),
      segmento: answers.segment,
      landing_url: window.location.href.split("#")[0],
      submitted_at: new Date().toISOString(),
      ...utms,
    };
    try {
      const ctrl = new AbortController();
      const timer = window.setTimeout(() => ctrl.abort(), 15000);
      const res = await fetch(site.contact.leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      });
      window.clearTimeout(timer);
      if (!res.ok) throw new Error(String(res.status));
      trackLead(source);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Não foi possível enviar agora. Suas respostas foram mantidas — tente novamente.");
    }
  }

  if (!open) return null;

  const progress = status === "success" ? 100 : Math.round(((step + 1) / steps.length) * 100);
  const err = (k: keyof LeadAnswers) => errors[k];

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink-950/80 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && status !== "sending" && close()}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-title"
        className="relative flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-card sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink-900/5 px-6 pb-4 pt-5">
          <div>
            <p id="lead-title" className="font-display text-lg font-extrabold text-ink-900">Fale com a Gravon Company</p>
            {status !== "success" ? (
              <p className="mt-0.5 text-sm text-zinc-500" aria-live="polite">Etapa {step + 1} de {steps.length} · {steps[step]}</p>
            ) : null}
          </div>
          <button type="button" onClick={close} disabled={status === "sending"} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-500 hover:bg-sand-100 disabled:opacity-40" aria-label="Fechar">
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="h-1.5 w-full bg-sand-100" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} aria-label="Progresso do formulário">
          <div className="h-full bg-gold-400 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        {status !== "success" ? (
          <ol className="flex gap-1 px-6 pt-3 text-[11px] font-semibold" aria-hidden>
            {steps.map((s, i) => (
              <li key={s} className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 ${i === step ? "bg-gold-50 text-gold-700 ring-1 ring-gold-200" : i < step ? "text-emerald-700" : "text-zinc-400"}`}>
                {i < step ? <Check className="h-3 w-3" /> : <span>{i + 1}</span>} {s}
              </li>
            ))}
          </ol>
        ) : null}

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          {status === "success" ? (
            <div className="py-6 text-center" role="status">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                <CheckCircle2 className="h-7 w-7" aria-hidden />
              </span>
              <p className="mt-4 font-display text-2xl font-extrabold text-ink-900">Recebemos suas respostas!</p>
              <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-zinc-600">Um especialista da Gravon Company vai entrar em contato pelo WhatsApp informado.</p>
              <button type="button" onClick={close} className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-ink-900 px-6 text-[15px] font-semibold text-white hover:bg-ink-700">Fechar</button>
            </div>
          ) : step === 0 ? (
            <fieldset>
              <legend className="font-display text-xl font-bold text-ink-900">Qual é o faturamento mensal da sua empresa?</legend>
              <OptionList name="revenue" options={revenueOptions} value={answers.revenue} onChange={(v) => set("revenue", v)} />
              {err("revenue") ? <FieldError msg={err("revenue")!} /> : null}
            </fieldset>
          ) : step === 1 ? (
            <fieldset>
              <legend className="font-display text-xl font-bold text-ink-900">Como podemos falar com você?</legend>
              <div className="mt-4 space-y-3.5">
                {contactFields.map((f) => (
                  <label key={f.key} className="block">
                    <span className="mb-1.5 block text-sm font-medium text-zinc-700">{f.label}{f.required ? " *" : ""}</span>
                    <input
                      name={f.key}
                      type={f.type}
                      inputMode={f.type === "tel" ? "tel" : f.type === "email" ? "email" : undefined}
                      autoComplete={f.autoComplete}
                      placeholder={f.placeholder}
                      value={answers[f.key]}
                      onChange={(e) => set(f.key, e.target.value)}
                      onBlur={(e) => setErrors((x) => ({ ...x, [f.key]: validateField(f.key, e.target.value) }))}
                      aria-invalid={Boolean(err(f.key))}
                      aria-describedby={err(f.key) ? `err-${f.key}` : undefined}
                      maxLength={f.key === "whatsapp" ? 16 : 120}
                      className={`w-full rounded-xl bg-sand-50 px-4 py-3 text-[15px] text-ink-900 ring-1 placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 ${err(f.key) ? "ring-red-400 focus:ring-red-500" : "ring-ink-900/10 focus:ring-gold-500"}`}
                    />
                    {err(f.key) ? <FieldError id={`err-${f.key}`} msg={err(f.key)!} /> : null}
                  </label>
                ))}
              </div>
            </fieldset>
          ) : (
            <fieldset>
              <legend className="font-display text-xl font-bold text-ink-900">Qual é o segmento da sua empresa?</legend>
              <OptionList name="segment" options={segmentOptions} value={answers.segment} onChange={(v) => set("segment", v)} />
              {err("segment") ? <FieldError msg={err("segment")!} /> : null}
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">Ao enviar, você concorda em ser contatado pela Gravon Company sobre esta solicitação.</p>
            </fieldset>
          )}

          {status === "error" ? (
            <div role="alert" className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700 ring-1 ring-red-200">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> {errorMsg}
            </div>
          ) : null}
          {!optionsConfirmed && status !== "success" ? (
            <p className="mt-4 rounded-lg bg-gold-50 px-3 py-2 text-[11px] leading-snug text-gold-700 ring-1 ring-gold-200">Prévia: opções provisórias, a conferir com o formulário oficial de ia.gravoncompany.com.</p>
          ) : null}
        </div>

        {status !== "success" ? (
          <div className="flex items-center justify-between gap-3 border-t border-ink-900/5 px-6 py-4">
            <button
              type="button"
              onClick={() => { setErrors({}); setStep((s) => Math.max(0, s - 1)); }}
              disabled={step === 0 || status === "sending"}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-zinc-600 hover:bg-sand-100 disabled:invisible"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar
            </button>
            {step < steps.length - 1 ? (
              <button type="button" onClick={next} className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-gold-400 px-6 text-[15px] font-semibold text-ink-950 shadow-glow hover:bg-gold-300">
                Continuar <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            ) : (
              <button type="button" onClick={submit} disabled={status === "sending"} className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-ink-900 px-6 text-[15px] font-semibold text-white hover:bg-ink-700 disabled:opacity-70">
                {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Enviando…</> : status === "error" ? "Tentar novamente" : "Enviar"}
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function OptionList({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div role="radiogroup" className="mt-4 grid gap-2">
      {options.map((o, i) => {
        const on = o === value;
        return (
          <button
            key={o}
            type="button"
            role="radio"
            name={name}
            aria-checked={on}
            tabIndex={on || (!value && i === 0) ? 0 : -1}
            onClick={() => onChange(o)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowLeft") {
                e.preventDefault();
                const d = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
                const idx = (Math.max(0, options.indexOf(value)) + d + options.length) % options.length;
                onChange(options[idx]);
                (e.currentTarget.parentElement?.children[idx] as HTMLElement | undefined)?.focus();
              }
            }}
            className={`flex min-h-[48px] items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-[15px] font-medium ring-1 transition-colors ${on ? "bg-gold-50 text-ink-900 ring-2 ring-gold-500" : "bg-white text-zinc-700 ring-ink-900/10 hover:ring-ink-900/25"}`}
          >
            {o}
            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${on ? "bg-gold-500 text-white" : "ring-1 ring-ink-900/20"}`} aria-hidden>
              {on ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function FieldError({ msg, id }: { msg: string; id?: string }) {
  return <p id={id} className="mt-1.5 text-sm font-medium text-red-600">{msg}</p>;
}
