"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LeadModal } from "./LeadModal";

type Ctx = { open: (source: string) => void };
const LeadModalContext = createContext<Ctx>({ open: () => {} });

export function useLeadModal() {
  return useContext(LeadModalContext);
}

/** Um único pop-up de captação para todos os botões do site. Abre também pelo endereço #fale-com-a-gravon. */
export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [source, setSource] = useState<string | null>(null);
  const open = useCallback((s: string) => setSource(s), []);

  useEffect(() => {
    const fromHash = () => {
      if (window.location.hash === "#fale-com-a-gravon") setSource("link direto");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  return (
    <LeadModalContext.Provider value={{ open }}>
      {children}
      <LeadModal open={source !== null} source={source ?? ""} onClose={() => setSource(null)} />
    </LeadModalContext.Provider>
  );
}
