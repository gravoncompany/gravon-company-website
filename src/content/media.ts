/**
 * Capturas reais de produto. Enquanto estiverem `undefined`, o site exibe
 * representações ilustrativas (sem dados reais). Coloque as imagens em
 * /public/images/... e preencha os caminhos abaixo.
 * Atenção: remova/borre nomes, telefones e valores de clientes antes de publicar.
 */
export const media: {
  pipeflow?: { src: string; alt: string; width: number; height: number };
  portal?: { src: string; alt: string; width: number; height: number };
} = {
  pipeflow: undefined, // ex.: { src: "/images/pipeflow/pipeline.webp", alt: "Funil de vendas no Pipeflow", width: 1600, height: 1000 }
  portal: undefined, // ex.: { src: "/images/portal/dashboard.webp", alt: "Dashboard do Portal Gravon", width: 1600, height: 1000 }
};
