/**
 * Formulário do pop-up de captação (3 etapas), conferido com o formulário do botão principal
 * de https://ia.gravoncompany.com/ (faixas, campos obrigatórios e pergunta de segmento).
 */
export const revenueOptions: string[] = [
  "Até R$ 25 mil",
  "De R$ 25 mil a R$ 50 mil",
  "De R$ 50 mil a R$ 100 mil",
  "De R$ 100 mil a R$ 300 mil",
  "Acima de R$ 300 mil",
];

export const segmentQuestion = "Qual é o segmento do seu negócio?";
export const segmentPlaceholder = "Ex: E-commerce, Saúde, Educação...";

export type ContactField = {
  key: "name" | "whatsapp" | "instagram";
  label: string;
  type: "text" | "tel";
  autoComplete: string;
  placeholder?: string;
  required: true;
};

export const contactFields: ContactField[] = [
  { key: "name", label: "Nome", type: "text", autoComplete: "name", required: true },
  { key: "whatsapp", label: "WhatsApp com DDD", type: "tel", autoComplete: "tel", placeholder: "(DDD) 00000-0000", required: true },
  { key: "instagram", label: "Instagram", type: "text", autoComplete: "off", placeholder: "@seuperfil", required: true },
];

export const steps = ["Faturamento", "Dados de contato", "Segmento"] as const;

export type LeadAnswers = { revenue: string; name: string; whatsapp: string; instagram: string; segment: string };

export const emptyAnswers: LeadAnswers = { revenue: "", name: "", whatsapp: "", instagram: "", segment: "" };

const requiredMessages: Record<ContactField["key"], string> = {
  name: "Informe seu nome.",
  whatsapp: "Informe seu WhatsApp com DDD.",
  instagram: "Informe o Instagram.",
};

export function cleanInstagram(v: string) {
  return v.trim().replace(/^(https?:\/\/)?(www\.|m\.)?instagram\.com\//i, "").replace(/[/?#].*$/, "");
}

/** Validações por campo; retorna a mensagem de erro ou "" quando válido. */
export function validateField(key: keyof LeadAnswers, value: string): string {
  const v = value.trim();
  if (key === "revenue") return v ? "" : "Selecione o faturamento mensal.";
  if (key === "segment") {
    if (!v) return "Informe o segmento do seu negócio.";
    return v.length < 2 ? "Informe o segmento do seu negócio." : "";
  }
  if (!v) return requiredMessages[key];
  if (key === "name" && v.length < 2) return "Informe seu nome.";
  if (key === "whatsapp") {
    const d = v.replace(/\D/g, "");
    const n = d.startsWith("55") && d.length >= 12 ? d.slice(2) : d;
    if (n.length < 10 || n.length > 11) return "Informe um WhatsApp com DDD.";
  }
  if (key === "instagram" && !/^@?[A-Za-z0-9._]{1,30}$/.test(cleanInstagram(v))) return "Informe um @ válido do Instagram.";
  return "";
}

export function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
