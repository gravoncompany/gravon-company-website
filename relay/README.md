# Gravon Lead Relay (Cloudflare Worker)

Recebe o pop-up de captação do site (inclusive da prévia no GitHub Pages) e repassa ao **Zapier**.
A URL do webhook do Zapier fica **somente** no segredo do Worker — nunca no site nem no repositório.

## Campos repassados ao Zapier

`event_id` (único por envio; reenvios mantêm o mesmo), `faturamento`, `name`, `whatsapp` (só dígitos),
`email`, `instagram`, `company`, `segmento`, `cta`, `form`, `landing_url`, `submitted_at`, UTMs/gclid/fbclid
e, para o inbound do Pipeflow: `revenue` (= faturamento), `service` (= segmento), `source`, `form_origin`.

## Publicar (uma vez)

```bash
cd relay
npx wrangler login
npx wrangler deploy
npx wrangler secret put ZAPIER_WEBHOOK_URL   # cole a URL "Catch Hook" do Zap
```

1. Copie a URL do Worker gerada (ex.: `https://gravon-lead-relay.<conta>.workers.dev`).
2. No GitHub: **Settings → Secrets and variables → Actions → Variables → New variable**
   `LEAD_ENDPOINT` = URL do Worker. O próximo deploy da prévia passa a enviar.
3. Origens permitidas ficam em `wrangler.toml` (`ALLOWED_ORIGINS`).

## Testes

`npm run test:relay` (na raiz do site).
