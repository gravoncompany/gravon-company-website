# Gravon Company — Website institucional (versão de demonstração)

> **Presença é a nova gravidade.** — Marketing que atrai. Inteligência que converte.

Website institucional independente da Gravon Company. Não depende nem altera o Pipeflow
(`boardly-leads`) ou o site atual em `gravoncompany.com`.

## Stack

- **Next.js 16** (App Router, páginas estáticas) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (tokens de marca em `src/app/globals.css`)
- Animações em CSS puro (Reveal por IntersectionObserver, gradiente animado, marquee) e ícones **lucide-react**
- Fontes via `next/font` (Plus Jakarta Sans 600–800 nas headlines + Inter 400–600, auto-hospedadas no build)
- SEO: metadados, Open Graph, JSON-LD (Organization/WebSite/ProfessionalService), `sitemap.xml`, `robots.txt`
- Acessibilidade: HTML semântico, skip link, foco visível, `aria` em tabs/menus/formulário, `prefers-reduced-motion`

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # opcional: preencha só com dados reais
npm run dev                  # http://localhost:3000
```

Produção local: `npm run build && npm start`.
Versão estática (pasta `out/`, para hospedagem estática/preview): `STATIC_EXPORT=1 npm run build` (com `NEXT_PUBLIC_BASE_PATH=/subcaminho` para hospedar fora da raiz).

## Estrutura

```
src/
  app/            layout (SEO, fontes, JSON-LD), page, sitemap, robots, 404, ícone
  components/
    Header, Footer, Analytics (GTM/GA4/Pixel com consentimento)
    sections/     Hero, Differential, Solutions, Pipeflow, Portal, Methodology, Projects, ContactCta (+ partes client)
    ui/           Button, Reveal, SectionHeading, Icon, Logo, AppWindow, SpotlightCard, Starfield
  content/
    cases.ts      projetos/cases (somente `published: true` aparecem)
    media.ts      capturas reais do Pipeflow e do Portal
  lib/site.ts     dados da marca + leitura das variáveis de ambiente
```

## Linguagem visual (branch `redesign`)

Derivada do código da landing page do Pipeflow (`gravoncompany/pipeflow-landing-page`), com a paleta preto + dourado da Gravon:

| Elemento | Pipeflow | Gravon |
|---|---|---|
| Headlines | Plus Jakarta Sans 800, `leading-[1.08]`, `tracking-tight`, hero até 64px | Mesma família/peso; hero até 80px |
| Títulos de seção | `text-3xl sm:text-4xl lg:text-[44px]` bold | Igual |
| Eyebrow | Pílula `rounded-full` com ponto, `tracking-[.14em]` | Igual, em dourado |
| Seções | `py-20 lg:py-28`, alternando escuro/claro | Preto `#060607` / areia `#FAF8F3` / branco |
| Botões | `rounded-xl`, `min-h-[48px]`, glow azul | Mesmo formato, dourado com glow dourado |
| Cards | `rounded-2xl`, ring + `shadow-card`, `hover:-translate-y-1`, ícone que preenche | Igual, com ícone dourado |
| Capturas | `BrowserFrame` + ampliação ao clicar | Igual (capturas reais do Pipeflow, dados demonstrativos) |
| Animações | Reveal 18px/0.7s, gradiente `flow`, `float` | Iguais + marquee de frentes de atuação |

## Seções da página

1. **Hero** (escuro) — headline de 80px, CTAs e composição: captura real do Pipeflow cercada por cartões de Google Ads, Meta Ads, Gravon IA e Portal.
2. **Faixa de frentes** — marquee com as áreas de atuação.
3. **Soluções** (areia) — prévias de Google Ads (busca com resultado Patrocinado), Meta Ads (anúncio no feed do Instagram) e landing page em celular, todas com a mesma empresa de exemplo fictícia (`src/content/example.ts`), seguidas de Automação, Dados e CRM com IA.
4. **Jornada** (branco) — "Gerar leads é apenas o começo." com funil escalonado de 7 etapas.
5. **Pipeflow CRM** (escuro) — abas com 3 capturas reais (Pipeline, Ficha do lead, Gravon IA) e recursos.
6. **Portal Gravon** (areia) — "Dashboard do Portal" (dados de demonstração substituídos na própria imagem) e "Próximos passos", lado a lado no desktop e empilhados no celular, com versão própria para celular e ampliação ao clicar. Arquivos em `public/images/portal/` (`portal-dashboard-demo`, `portal-dashboard-demo-mobile`, `portal-proximos-passos`, `portal-proximos-passos-mobile`), configurados em `src/content/media.ts`.
7. **Metodologia CMC** (escuro) — 4 etapas em abas com avanço automático e painel de detalhes.
8. **Projetos e cases** (branco) — filtros e espaços reservados até haver cases autorizados.
9. **Chamada comercial** (dourado) — CTA + formulário.

## Marca

- Logotipo oficial: `public/brand/gravon-logo.png` (transparente), usado no cabeçalho e no rodapé.
- Favicon/ícones: `src/app/icon.png`, `src/app/apple-icon.png` e `src/app/favicon.ico`, gerados a partir do símbolo "G".
- Se houver versão vetorial (SVG) do logotipo, substitua o PNG para nitidez máxima em telas de alta densidade.

## Conteúdo: regras

- Nada de clientes, números, avaliações ou contatos inventados. Tudo que é dado real entra por
  `.env.local`, `src/content/cases.ts` ou `src/content/media.ts`.
- Cases exigem autorização; métricas exigem `source` e `period`; depoimentos exigem `authorized: true`.
- Capturas de produto: remover/borrar nomes, telefones e valores de clientes antes de publicar.

## Integrações (todas desligadas sem configuração)

| Variável | Efeito |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Ativa botões de WhatsApp e o envio do formulário via WhatsApp |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Formulário faz `POST` JSON (nome, empresa, telefone, e-mail, interesse, mensagem, consentimento, página e UTMs/gclid/fbclid) |
| `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_INSTAGRAM_URL` | Exibidos no rodapé e no JSON-LD |
| `NEXT_PUBLIC_PIPEFLOW_URL`, `NEXT_PUBLIC_PORTAL_URL` | Destino de “Conheça o Pipeflow” e link de acesso ao Portal |
| `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID` | Carregados **somente após consentimento** do visitante; evento `generate_lead`/`Lead` no envio do formulário |
| `NEXT_PUBLIC_SITE_URL` | URL canônica (padrão `https://gravoncompany.com`) |
| `NEXT_PUBLIC_ALLOW_INDEXING=true` | Libera indexação. Sem ela, o site sai com `noindex` e `robots.txt` bloqueando tudo |

Sem WhatsApp nem endpoint, o formulário informa que está em modo demonstração.

## Publicação futura (somente após aprovação)

1. Criar o repositório `gravon-company-website` no GitHub e enviar este código.
2. Conectar a um host com suporte a Next.js (ex.: Vercel, Netlify ou Cloudflare) e gerar **preview** primeiro.
3. Configurar as variáveis de ambiente com dados reais.
4. Somente após aprovação: definir `NEXT_PUBLIC_ALLOW_INDEXING=true`, apontar o domínio e configurar redirecionamentos
   das URLs antigas (para não perder posicionamento) e enviar o sitemap no Google Search Console.

## Demonstração online

O workflow `.github/workflows/demo-pages.yml` publica as duas versões (GitHub Pages, com `noindex`):
- `https://gravoncompany.github.io/gravon-company-website/` — branch `main`
- `https://gravoncompany.github.io/gravon-company-website/redesign/` — branch `redesign`
Se o primeiro deploy falhar por Pages desativado: **Settings → Pages → Source: GitHub Actions** e rode o workflow novamente.
