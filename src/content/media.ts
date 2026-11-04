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
 * Capturas do Portal Gravon exibidas na seção Portal.
 * - Dashboard: valores substituídos por dados de demonstração na própria imagem.
 * - Próximos passos: área "Meu projeto" (objetivos, progresso e entregas), sem nome do cliente.
 * `mobile` é usado no celular; `desktop` no computador e na ampliação.
 */
export type PortalShot = { id: string; heading: string; caption: string; desktop: Screen; mobile: Screen };

export const portalShots: PortalShot[] = [
  {
    id: "dashboard",
    heading: "Dashboard do Portal",
    caption: "Dados de demonstração",
    desktop: { src: "/images/portal/portal-dashboard-demo.webp", width: 880, height: 742, title: "Dashboard do Portal", alt: "Dashboard do Portal Gravon com dados de demonstração: filtros por plataforma e período e resumo executivo com investimento total, resultados gerados, custo por resultado e conversões comerciais" },
    mobile: { src: "/images/portal/portal-dashboard-demo-mobile.webp", width: 440, height: 1110, title: "Dashboard do Portal", alt: "Dashboard do Portal Gravon com dados de demonstração em formato de celular: investimento total, resultados gerados, custo por resultado e conversões comerciais" },
  },
  {
    id: "proximos-passos",
    heading: "Próximos passos",
    caption: "Progresso e entregas do projeto",
    desktop: { src: "/images/portal/portal-proximos-passos.webp", width: 1247, height: 920, title: "Próximos passos", alt: "Área de próximos passos do Portal Gravon com objetivos de cada mês, últimas atualizações, progresso real das entregas e lista de entregas com status" },
    mobile: { src: "/images/portal/portal-proximos-passos-mobile.png", width: 724, height: 1452, title: "Próximos passos", alt: "Próximos passos no Portal Gravon em formato de celular: progresso real das entregas e lista de entregas do mês 1 com status" },
  },
];
