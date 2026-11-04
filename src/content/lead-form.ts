/**
 * Formulário do pop-up de captação (3 etapas), espelhando o formulário do botão principal
 * de https://ia.gravoncompany.com/.
 *
 * ⚠️ PROVISÓRIO: ia.gravoncompany.com não pôde ser lido do ambiente de desenvolvimento.
 * As faixas de faturamento, os segmentos e a obrigatoriedade dos campos abaixo precisam ser
 * conferidos com o formulário oficial. Ao confirmar, troque os valores e defina
 * `optionsConfirmed = true` (isso remove o aviso exibido na prévia).
 */
export const optionsConfirmed = false;

export const revenueOptions: string[] = [
  "Até R$ 10 mil por mês",
  "De R$ 10 mil a R$ 50 mil por mês",
  "De R$ 50 mil a R$ 100 mil por mês",
  "De R$ 100 mil a R$ 500 mil por mês",
  "Acima de R$ 500 mil por mês",
];

export const segmentOptions: string[] = [
  "Saúde e estética",
  "Serviços profissionais",
  "Varejo e e-commerce",
  "Educação",
  "Indústria",
  "Imobiliário e construção",
  "Alimentação",
  "Outro",
];

export type ContactField = {
  key: "name" | "whatsapp" | "email" | "instagram" | "company";
  label: string;
  type: "text" | "tel" | "email";
  autoComplete: string;
  placeholder?: string;
  required: boolean;
};

export const contactFields: ContactField[] = [
  { key: "name", label: "Nome", type: "text", autoComplete: "name", required: true },
  { key: "whatsapp", label: "WhatsApp", type: "tel", autoComplete: "tel", placeholder: "(DDD) 00000-0000", required: true },
  { key: "email", label: "E-mail", type: "email", autoComplete: "email", required: true },
  { key: "instagram", label: "Instagram", type: "text", autoComplete: "off", placeholder: "@suaempresa", required: true },
  { key: "company", label: "Empresa", type: "text", autoComplete: "organization", required: false },
];

export const steps = ["Faturamento", "Dados de contato", "Segmento"] as const;

export type LeadAnswers = {
  revenue: string;
  name: string;
  whatsapp: string;
  email: string;
  instagram: string;
  company: string;
  segment: string;
};

export const emptyAnswers: LeadAnswers = { revenue: "", name: "", whatsapp: "", email: "", instagram: "", company: "", segment: "" };

const requiredMessages: Record<ContactField["key"], string> = {
  name: "Informe seu nome.",
  whatsapp: "Informe seu WhatsApp.",
  email: "Informe seu e-mail.",
  instagram: "Informe o Instagram.",
  company: "Informe a empresa.",
};

/** Validações por campo; retorna a mensagem de erro ou "" quando válido. */
export function validateField(key: keyof LeadAnswers, value: string): string {
  const v = value.trim();
  const field = contactFields.find((f) => f.key === key);
  if (key === "revenue") return v ? "" : "Selecione o faturamento mensal.";
  if (key === "segment") return v ? "" : "Selecione o segmento.";
  if (!field) return "";
  if (!v) return field.required ? requiredMessages[field.key] : "";
  if (key === "name" && v.length < 2) return "Informe seu nome.";
  if (key === "whatsapp") {
    const d = v.replace(/\D/g, "");
    const n = d.startsWith("55") && d.length >= 12 ? d.slice(2) : d;
    if (n.length < 10 || n.length > 11) return "Informe um WhatsApp com DDD.";
  }
  if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Informe um e-mail válido.";
  if (key === "instagram" && !/^@?[A-Za-z0-9._]{1,30}$/.test(v.replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/\/$/, ""))) return "Informe um @ válido do Instagram.";
  return "";
}

export function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
