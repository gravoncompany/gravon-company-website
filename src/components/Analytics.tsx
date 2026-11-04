"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Pontos de integração GTM / GA4 / Meta Pixel.
 * - Nada é carregado se os IDs não estiverem configurados no ambiente.
 * - Com IDs configurados, scripts só carregam após consentimento explícito (LGPD).
 */
const KEY = "gravon-consent";
type Consent = "granted" | "denied" | null;

const { gtmId, ga4Id, metaPixelId } = site.tracking;
const hasTracking = Boolean(gtmId || ga4Id || metaPixelId);

export function Analytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const v = window.localStorage.getItem(KEY);
      if (v === "granted" || v === "denied") setConsent(v);
    } catch {
      /* armazenamento indisponível: pergunta novamente */
    }
    setReady(true);
  }, []);

  if (!hasTracking || !ready) return null;

  const decide = (v: "granted" | "denied") => {
    try {
      window.localStorage.setItem(KEY, v);
    } catch {
      /* ignora */
    }
    setConsent(v);
  };

  if (consent === null) {
    return (
      <div role="dialog" aria-live="polite" aria-label="Preferências de cookies" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl glass p-5 text-sm shadow-2xl sm:inset-x-auto sm:right-6">
        <p className="text-mist-300">
          Usamos cookies de medição para entender o desempenho do site e das campanhas. Você pode aceitar ou recusar.
        </p>
        <div className="mt-4 flex gap-3">
          <button type="button" onClick={() => decide("granted")} className="rounded-full bg-gold-400 px-5 py-2 font-medium text-ink-950">Aceitar</button>
          <button type="button" onClick={() => decide("denied")} className="rounded-full border border-white/15 px-5 py-2 text-mist-100">Recusar</button>
        </div>
      </div>
    );
  }

  if (consent !== "granted") return null;

  return (
    <>
      {gtmId ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`}
        </Script>
      ) : null}
      {ga4Id ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(ga4Id)});`}
          </Script>
        </>
      ) : null}
      {metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(metaPixelId)});fbq('track','PageView');`}
        </Script>
      ) : null}
    </>
  );
}

/** Dispara evento de conversão nos rastreadores ativos (no-op sem consentimento/IDs). */
export function trackLead(source: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void };
  w.dataLayer?.push({ event: "generate_lead", lead_source: source });
  w.gtag?.("event", "generate_lead", { lead_source: source });
  w.fbq?.("track", "Lead", { content_name: source });
}
