"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * Encaixe do chat flutuante original da Gravon IA (canto inferior direito).
 * O código de incorporação de https://ia.gravoncompany.com/ ainda não foi fornecido; quando estiver disponível:
 *   NEXT_PUBLIC_GRAVON_IA_CHAT_SCRIPT = URL do script de incorporação
 *   NEXT_PUBLIC_GRAVON_IA_CHAT_ID     = identificador/atributo exigido pelo script (opcional)
 * Enquanto o pop-up de captação estiver aberto, o contêiner do chat é recolhido (classe/atributo abaixo)
 * e o evento window "gravon:lead-modal" informa {open} para a API do chat, se ela expuser fechar/abrir.
 */
const SRC = process.env.NEXT_PUBLIC_GRAVON_IA_CHAT_SCRIPT?.trim();
const CHAT_ID = process.env.NEXT_PUBLIC_GRAVON_IA_CHAT_ID?.trim();

export function GravonIaChat() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const on = (e: Event) => setHidden(Boolean((e as CustomEvent<{ open: boolean }>).detail?.open));
    window.addEventListener("gravon:lead-modal", on);
    return () => window.removeEventListener("gravon:lead-modal", on);
  }, []);
  if (!SRC) return null;
  return (
    <>
      <style>{`html[data-lead-modal-open] [data-gravon-ia-chat], html[data-lead-modal-open] [data-gravon-ia-chat] * { visibility: hidden !important; pointer-events: none !important; }`}</style>
      <div data-gravon-ia-chat aria-hidden={hidden || undefined} />
      <Script src={SRC} strategy="lazyOnload" {...(CHAT_ID ? { "data-id": CHAT_ID } : {})} />
    </>
  );
}
