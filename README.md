# Gravon Company — Website institucional (versão de demonstração)

> **Presença é a nova gravidade.** — Marketing que atrai. Inteligência que converte.

Website institucional independente da Gravon Company. Não depende nem altera o Pipeflow
(`boardly-leads`) ou o site atual em `gravoncompany.com`.

## Stack

- **Next.js 16** (App Router, páginas estáticas) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (tokens de marca em `src/app/globals.css`)
- **Motion** (`motion/react`) para animações de entrada/interação; órbitas e brilhos em CSS puro
- Fontes via `next/font` (Sora + Inter, auto-hospedadas no build)
- SEO: metadados, Open Graph, JSON-LD (Organization/WebSite/ProfessionalService), `sitemap.xml`, `robots.txt`
- Acessibilidade: HTML semântico, skip link, foco visível, `aria` em tabs/menus/formulário, `prefers-reduced-motion`

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # opcional: preencha só com dados reais
npm run dev                  # http://localhost:3000
```

Produção local: `npm run build && npm start`.
Versão estática (pasta `out/`, para hospedagem estática/preview): `STATIC_EXPORT=1 npm run build`.

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

## Seções da página

1. **Hero** — headline, subtítulo, CTAs e sistema orbital animado (Google Ads, Meta Ads, CRM, IA, Dados, WhatsApp).
2. **O diferencial Gravon** — jornada Google/Meta Ads → Captação → CRM → Qualificação → Atendimento → Conversão → Análise.
3. **Nossas soluções** — 6 cards (Google Ads, Meta Ads, Sites/LPs, CRM com IA, Automação, Dados).
4. **Pipeflow CRM** — recursos e representação ilustrativa da interface (substituível por captura real).
5. **Portal Gravon** — recursos e dashboard ilustrativo (valores ocultos; substituível por captura real).
6. **Metodologia CMC** — mostrador interativo (clique/teclado, avanço automático) com as 4 etapas.
7. **Projetos e cases** — filtros por categoria e espaços reservados até haver cases autorizados.
8. **Chamada comercial** — CTA para WhatsApp + formulário de contato.

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

O workflow `.github/workflows/demo-pages.yml` publica uma versão estática a cada push na `main` em
`https://gravoncompany.github.io/gravon-company-website/` (GitHub Pages, com `noindex`).
Se o primeiro deploy falhar por Pages desativado: **Settings → Pages → Source: GitHub Actions** e rode o workflow novamente.
