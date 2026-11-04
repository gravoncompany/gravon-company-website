/**
 * Projetos e cases. Somente itens com `published: true` aparecem no site.
 *
 * Regras de conteúdo (não negociáveis):
 * - Use apenas clientes que autorizaram a divulgação por escrito.
 * - Métricas precisam de `source` (de onde vieram) e `period` verificáveis.
 * - Depoimentos só com `authorized: true` e nome/cargo aprovados.
 * - Imagens em /public/images/cases/ (capturas reais, sem dados pessoais).
 */
export type CaseCategory = "sites" | "google-ads" | "meta-ads" | "automacao" | "crm";

export const caseCategories: { id: CaseCategory; label: string }[] = [
  { id: "sites", label: "Websites e landing pages" },
  { id: "google-ads", label: "Google Ads" },
  { id: "meta-ads", label: "Meta Ads" },
  { id: "automacao", label: "Automação" },
  { id: "crm", label: "Implantação de CRM" },
];

export type CaseMetric = { label: string; value: string; period: string; source: string };

export type CaseStudy = {
  slug: string;
  published: boolean;
  category: CaseCategory;
  client: string;
  segment?: string;
  title: string;
  summary: string;
  image?: { src: string; alt: string };
  url?: string;
  metrics?: CaseMetric[];
  testimonial?: { quote: string; author: string; role?: string; authorized: boolean };
};

export const cases: CaseStudy[] = [
  // Exemplo de preenchimento (mantenha published: false até aprovação):
  // {
  //   slug: "cliente-exemplo",
  //   published: false,
  //   category: "google-ads",
  //   client: "Nome autorizado",
  //   segment: "Segmento",
  //   title: "Título do projeto",
  //   summary: "O que foi feito, em 1–2 frases.",
  //   image: { src: "/images/cases/cliente-exemplo.webp", alt: "Descrição da captura" },
  //   metrics: [{ label: "Leads", value: "—", period: "mm/aaaa–mm/aaaa", source: "Google Ads" }],
  //   testimonial: { quote: "…", author: "Nome", role: "Cargo", authorized: false },
  // },
];

export const publishedCases = cases.filter((c) => c.published);
