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

/** Captura real do Portal Gravon. Enquanto `undefined`, o site mostra um mockup ilustrativo. */
export const portalScreen: Screen | undefined = undefined;
