/**
 * Configuração central do site. Valores de contato e integrações vêm
 * exclusivamente de variáveis de ambiente — nada é inventado no código.
 */
const env = (v: string | undefined) => (v && v.trim() ? v.trim() : undefined);

const digitsOnly = (v: string | undefined) => {
  const d = v?.replace(/\D/g, "");
  return d && d.length >= 10 ? d : undefined;
};

export const site = {
  name: "Gravon Company",
  shortName: "Gravon",
  slogan: "Presença é a nova gravidade.",
  concept: "Marketing que atrai. Inteligência que converte.",
  description:
    "Agência de marketing digital, gestão de Google Ads e Meta Ads, CRM com inteligência artificial e automação comercial. A Gravon Company conecta marketing, tecnologia e inteligência comercial para transformar oportunidades em resultados.",
  url: (env(process.env.NEXT_PUBLIC_SITE_URL) ?? "https://gravoncompany.com").replace(/\/$/, ""),
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  locale: "pt_BR",
  keywords: [
    "agência de marketing digital",
    "gestão de Google Ads",
    "gestão de Meta Ads",
    "CRM com inteligência artificial",
    "automação comercial",
    "captação de clientes",
    "marketing e vendas",
    "criação de sites",
    "landing pages",
    "inteligência comercial",
  ],
  contact: {
    whatsapp: digitsOnly(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    leadEndpoint: env(process.env.NEXT_PUBLIC_LEAD_ENDPOINT),
    email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    instagram: env(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
  },
  links: {
    pipeflow: env(process.env.NEXT_PUBLIC_PIPEFLOW_URL),
    portal: env(process.env.NEXT_PUBLIC_PORTAL_URL),
  },
  tracking: {
    gtmId: env(process.env.NEXT_PUBLIC_GTM_ID),
    ga4Id: env(process.env.NEXT_PUBLIC_GA4_ID),
    metaPixelId: env(process.env.NEXT_PUBLIC_META_PIXEL_ID),
  },
} as const;

export const nav = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#pipeflow", label: "Pipeflow CRM" },
  { href: "#portal", label: "Portal" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#implementacao-90-dias", label: "90 dias" },
  { href: "#projeto-demonstrativo", label: "Projeto demo" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "Sobre" },
] as const;

/** Prefixa arquivos de /public com o basePath (necessário em hospedagem em subcaminho). */
export function asset(path: string) {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsappLink(message = "Olá, Gravon Company! Quero conversar com um especialista.") {
  if (!site.contact.whatsapp) return undefined;
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
