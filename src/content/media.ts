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

/** Gravon IA: hub tecnológico (bloco "CRM com inteligência artificial"), mascote e card do chat. */
export const gravonIa = {
  image: { src: "/images/gravon-ia/hub-tecnologico.webp", width: 500, height: 500, title: "Hub tecnológico Gravon IA", alt: "Hub tecnológico da Gravon IA: o símbolo da Gravon no centro conectado a ferramentas de inteligência artificial, Google e Meta" },
  /** hero-mascot.webp é estático: o site aplica um movimento sutil (parado para quem prefere movimento reduzido). */
  robot: { src: "/images/gravon-ia/hero-mascot.webp", width: 512, height: 512, alt: "Robô da Gravon IA acenando e segurando um celular" },
  robotSmall: { src: "/images/gravon-ia/hero-mascot-160.webp", width: 160, height: 160 },
  card: { src: "/images/gravon-ia/gravon-ia-card.webp", width: 400, height: 600, alt: "Gravon IA · Atendimento inteligente · Conecta marketing, vendas e resultados" },
};

/**
 * Artes finais da Aurora Estética (clínica fictícia do projeto demonstrativo).
 * Se alguma arte ficar sem `src`, o carrossel mostra a capa ilustrada provisória no lugar.
 */
export type Art = { src?: string; width: number; height: number; alt: string };
export const auroraArts: { carousel: [Art, Art]; reels: Art; stories: [Art, Art, Art] } = {
  carousel: [
    { src: "/images/aurora/carrossel-01.webp", width: 1254, height: 1254, alt: "Carrossel 01/02 da Aurora Estética: Limpeza de pele profunda — Como funciona, passo a passo" },
    { src: "/images/aurora/carrossel-02.webp", width: 1254, height: 1254, alt: "Carrossel 02/02 da Aurora Estética: Como é feita — 1. Avaliação da pele, 2. Higienização e extração, 3. Hidratação e proteção" },
  ],
  reels: { src: "/images/aurora/reels-capa.webp", width: 941, height: 1672, alt: "Capa de Reels da Aurora Estética: Limpeza de pele dói? A especialista responde" },
  stories: [
    { src: "/images/aurora/stories-01.webp", width: 941, height: 1672, alt: "Story 01/03 da Aurora Estética: Um momento para cuidar da sua pele" },
    { src: "/images/aurora/stories-02.webp", width: 941, height: 1672, alt: "Story 02/03 da Aurora Estética: Tudo começa com uma avaliação. Um cuidado pensado para sua pele" },
    { src: "/images/aurora/stories-03.webp", width: 941, height: 1672, alt: "Story 03/03 da Aurora Estética: Agende sua avaliação. Fale com a Aurora" },
  ],
};
