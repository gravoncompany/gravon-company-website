import { nav, site, whatsappLink } from "@/lib/site";
import { Logo } from "./ui/Logo";
import { Icon } from "./ui/Icon";

export function Footer() {
  const wa = whatsappLink();
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 font-display text-xl text-gold-gradient">{site.slogan}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist-500">
            Marketing, tecnologia e inteligência comercial integrados para transformar oportunidades em resultados.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-mist-500">Navegação</p>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-mist-300 transition hover:text-gold-300">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.28em] text-mist-500">Contato</p>
          <ul className="mt-5 space-y-3 text-sm">
            {wa ? (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-mist-300 transition hover:text-gold-300">
                  <Icon name="whatsapp" className="size-4" /> WhatsApp
                </a>
              </li>
            ) : null}
            {site.contact.email ? (
              <li>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 text-mist-300 transition hover:text-gold-300">
                  <Icon name="mail" className="size-4" /> {site.contact.email}
                </a>
              </li>
            ) : null}
            {site.contact.instagram ? (
              <li>
                <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-mist-300 transition hover:text-gold-300">
                  <Icon name="instagram" className="size-4" /> Instagram
                </a>
              </li>
            ) : null}
            <li>
              <a href="#contato" className="text-mist-300 transition hover:text-gold-300">Formulário de contato</a>
            </li>
            {site.links.portal ? (
              <li>
                <a href={site.links.portal} className="text-mist-300 transition hover:text-gold-300">Acesso ao Portal Gravon</a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.05]">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-mist-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p>Marketing que atrai. Inteligência que converte.</p>
        </div>
      </div>
    </footer>
  );
}
