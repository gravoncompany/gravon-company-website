"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Send, X } from "lucide-react";
import { asset, site, whatsappLink } from "@/lib/site";
import { gravonIa } from "@/content/media";
import { useLeadModal } from "./lead/LeadModalProvider";

/**
 * Chat flutuante da Gravon IA (canto inferior direito).
 * - Botão circular com o mascote; fundo amarelo no hover/foco.
 * - Painel dentro da página, com fechar (X / Esc) e recolhido enquanto o pop-up de captação estiver aberto.
 * - Atendimento por IA: conecta quando NEXT_PUBLIC_GRAVON_IA_CHAT_ENDPOINT estiver definido
 *   (POST JSON { messages: [{ role, content }], page } → resposta JSON { reply: string }).
 *   Sem o endpoint, o painel oferece os atalhos de atendimento e não simula respostas da IA.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_GRAVON_IA_CHAT_ENDPOINT?.trim();

type Msg = { role: "assistant" | "user"; content: string };
const greeting: Msg = { role: "assistant", content: "Olá! Eu sou a Gravon IA. Posso te ajudar a entender como atrair clientes, organizar o comercial e acompanhar resultados. Por onde começamos?" };

export function GravonIaChat() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const { open: openLead } = useLeadModal();
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Recolhe o chat enquanto o formulário de captação estiver aberto.
  useEffect(() => {
    const on = (e: Event) => {
      const isOpen = Boolean((e as CustomEvent<{ open: boolean }>).detail?.open);
      setModalOpen(isOpen);
      if (isOpen) setOpen(false);
    };
    window.addEventListener("gravon:lead-modal", on);
    return () => window.removeEventListener("gravon:lead-modal", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>("[data-chat-focus]")?.focus(), 40);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => { window.clearTimeout(t); document.removeEventListener("keydown", onKey); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight }); }, [messages, open]);

  function close() { setOpen(false); btnRef.current?.focus(); }

  async function send(e?: React.FormEvent) {
    e?.preventDefault();
    const content = text.trim();
    if (!content || !ENDPOINT || busy) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next); setText(""); setBusy(true); setError("");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next, page: window.location.href.split("#")[0] }) });
      const data = (await res.json().catch(() => ({}))) as { reply?: string };
      if (!res.ok || !data.reply) throw new Error();
      setMessages((m) => [...m, { role: "assistant", content: data.reply! }]);
    } catch {
      setError("Não consegui responder agora. Tente de novo ou fale com um especialista.");
    } finally { setBusy(false); }
  }

  const wa = whatsappLink("Olá! Vim pelo site da Gravon Company e quero falar com a equipe.");
  const robot = gravonIa.robotSmall;

  if (modalOpen) return null;

  return (
    <>
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Chat da Gravon IA"
          className="fixed inset-x-3 bottom-[5.75rem] z-[65] flex max-h-[min(640px,calc(100dvh-7.5rem))] flex-col overflow-hidden rounded-2xl bg-ink-900 text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,.9)] ring-1 ring-gold-400/40 sm:inset-x-auto sm:right-5 sm:w-[380px]"
        >
          <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-gold-500/20 to-transparent px-4 py-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(robot.src)} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full bg-ink-950 object-contain ring-1 ring-gold-400/40" />
            <div className="min-w-0 flex-1">
              <p className="font-display text-[15px] font-bold">Gravon IA</p>
              <p className="flex items-center gap-1.5 text-[12px] text-zinc-400">
                <span className={`h-2 w-2 rounded-full ${ENDPOINT ? "bg-emerald-400" : "bg-gold-400"}`} aria-hidden />
                {ENDPOINT ? "Atendimento inteligente" : "Atendimento inteligente · atalhos"}
              </p>
            </div>
            <button type="button" onClick={close} className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 hover:bg-white/10 hover:text-white" aria-label="Fechar chat">
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div ref={listRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            <div className="flex items-center gap-3 rounded-xl bg-white/[.04] p-2.5 ring-1 ring-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(gravonIa.card.src)} alt={gravonIa.card.alt} width={64} height={96} className="h-24 w-16 shrink-0 rounded-lg object-cover" />
              <p className="text-[13px] leading-snug text-zinc-300"><span className="font-semibold text-gold-200">Gravon IA</span><br />Atendimento inteligente que conecta marketing, vendas e resultados.</p>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[14px] leading-snug ${m.role === "user" ? "rounded-br-sm bg-gold-400 text-ink-950" : "rounded-bl-sm bg-white/[.07] text-zinc-100 ring-1 ring-white/10"}`}>{m.content}</p>
              </div>
            ))}
            {busy ? <p className="text-[13px] text-zinc-400">Gravon IA está digitando…</p> : null}
            {error ? <p role="alert" className="text-[13px] text-red-300">{error}</p> : null}

            <div className="grid gap-2 pt-1">
              <button type="button" data-chat-focus onClick={() => openLead("chat-gravon-ia")} className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl bg-gold-400 px-3.5 text-left text-[14px] font-semibold text-ink-950 hover:bg-gold-300">
                Quero falar com um especialista <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </button>
              <a href="#solucoes" onClick={() => setOpen(false)} className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl bg-white/[.05] px-3.5 text-[14px] font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10">
                Conhecer as soluções <ArrowRight className="h-4 w-4 shrink-0 text-gold-300" aria-hidden />
              </a>
              <a href="#projeto-demonstrativo" onClick={() => setOpen(false)} className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl bg-white/[.05] px-3.5 text-[14px] font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10">
                Ver um projeto demonstrativo <ArrowRight className="h-4 w-4 shrink-0 text-gold-300" aria-hidden />
              </a>
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl bg-white/[.05] px-3.5 text-[14px] font-medium text-zinc-100 ring-1 ring-white/10 hover:bg-white/10">
                  Conversar no WhatsApp <ArrowRight className="h-4 w-4 shrink-0 text-gold-300" aria-hidden />
                </a>
              ) : null}
            </div>
          </div>

          {ENDPOINT ? (
            <form onSubmit={send} className="flex items-center gap-2 border-t border-white/10 p-3">
              <label className="sr-only" htmlFor="gravon-ia-input">Mensagem para a Gravon IA</label>
              <input id="gravon-ia-input" value={text} onChange={(e) => setText(e.target.value)} maxLength={1000} placeholder="Escreva sua mensagem…" className="min-h-[44px] min-w-0 flex-1 rounded-xl bg-white/[.06] px-3.5 text-[14px] text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold-400" />
              <button type="submit" disabled={busy || !text.trim()} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400 text-ink-950 disabled:opacity-50" aria-label="Enviar mensagem">
                <Send className="h-4 w-4" aria-hidden />
              </button>
            </form>
          ) : null}
        </div>
      ) : null}

      <button
        ref={btnRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Fechar chat da Gravon IA" : "Abrir chat da Gravon IA"}
        data-gravon-ia-chat
        className="group fixed bottom-4 right-4 z-[66] flex h-16 w-16 items-center justify-center rounded-full bg-ink-900 shadow-[0_12px_34px_-8px_rgba(0,0,0,.75),0_0_0_1px_rgba(217,174,85,.55)] transition-colors duration-200 hover:bg-gold-400 focus-visible:bg-gold-400 sm:bottom-5 sm:right-5 sm:h-[68px] sm:w-[68px]"
      >
        {open ? (
          <X className="h-7 w-7 text-gold-300 group-hover:text-ink-950 group-focus-visible:text-ink-950" aria-hidden />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(robot.src)} alt="" width={robot.width} height={robot.height} className="h-[54px] w-[54px] object-contain sm:h-[58px] sm:w-[58px]" />
        )}
        {!open ? <span className={`pointer-events-none absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full ring-2 ring-ink-950 ${ENDPOINT ? "bg-emerald-400" : "bg-gold-300"}`} aria-hidden /> : null}
      </button>
    </>
  );
}
