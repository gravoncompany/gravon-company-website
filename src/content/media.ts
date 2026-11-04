/**
 * Capturas do Pipeflow CRM (as mesmas da landing page oficial do Pipeflow,
 * com dados demonstrativos já presentes nas imagens) e espaço para o Portal.
 */
export type Screen = { src: string; width: number; height: number; title: string; alt: string };

export const pipeflowScreens: { id: string; label: string; screen: Screen }[] = [
  {
    id: "pipeline",
    label: "Pipeline",
    screen: {
      src: "/images/pipeflow/pipeline.webp",
      width: 1670,
      height: 942,
      title: "Pipeline · Funil principal",
      alt: "Tela do Pipeline do Pipeflow CRM com colunas de etapas e cards de leads demonstrativos",
    },
  },
  {
    id: "ficha",
    label: "Ficha do lead",
    screen: {
      src: "/images/pipeflow/ficha-do-lead.webp",
      width: 1672,
      height: 941,
      title: "Ficha do lead",
      alt: "Ficha do lead aberta no Pipeflow CRM com informações de contato, origem, serviço de interesse e controle da Gravon IA",
    },
  },
  {
    id: "ia",
    label: "Gravon IA",
    screen: {
      src: "/images/pipeflow/chat-gravon-ia.webp",
      width: 1670,
      height: 941,
      title: "Chat Gravon IA",
      alt: "Tela do Chat Gravon IA no Pipeflow CRM sugerindo uma resposta para um lead demonstrativo",
    },
  },
];

/**
 * Captura real do Portal Gravon (Dashboard · Meta Ads · últimos 30 dias).
 * - `full`: captura inteira (abre ampliada)
 * - `desktop`: recorte do cabeçalho, filtros e resumo executivo
 * - `mobile`: cartões de indicadores recortados um a um para leitura no celular
 * Para trocar: substitua os arquivos em /public/images/portal mantendo os nomes, ou ajuste aqui.
 */
export const portalScreens = {
  full: { src: "/images/portal/dashboard-completo.webp", width: 2000, height: 1143, title: "Portal Gravon · Dashboard", alt: "Dashboard do Portal Gravon com período, filtros por plataforma, resumo executivo e gráfico de evolução dos resultados" },
  desktop: { src: "/images/portal/dashboard-resumo.webp", width: 1690, height: 640, title: "Portal Gravon · Dashboard", alt: "Portal Gravon: dashboard de Marketing e vendas com filtros de período e resumo executivo com investimento total, resultados gerados, custo por resultado e conversões comerciais" },
  mobile: [
    { src: "/images/portal/kpi-investimento.webp", width: 408, height: 204, title: "Investimento total", alt: "Cartão Investimento total do Portal Gravon" },
    { src: "/images/portal/kpi-resultados.webp", width: 408, height: 204, title: "Resultados gerados", alt: "Cartão Resultados gerados do Portal Gravon" },
    { src: "/images/portal/kpi-custo.webp", width: 408, height: 204, title: "Custo por resultado", alt: "Cartão Custo por resultado do Portal Gravon" },
  ],
} satisfies { full: Screen; desktop: Screen; mobile: Screen[] };
