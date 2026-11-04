import { AtSign, Mail, MessageCircle } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/site";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function Footer() {
  const wa = whatsappLink();
  const year = new Date().getFullYear();
  const link = "text-sm text-zinc-400 transition-colors hover:text-white";
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-14 text-zinc-400">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 font-display text-lg font-bold text-white">{site.slogan}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">
              Marketing, tecnologia e inteligência comercial integrados para transformar oportunidades em resultados.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-zinc-500">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}><a href={item.href} className={link}>{item.label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-zinc-500">Contato</p>
            <ul className="mt-4 space-y-2.5">
              {wa ? <li><a href={wa} target="_blank" rel="noopener noreferrer" className={`${link} inline-flex items-center gap-2`}><MessageCircle className="h-4 w-4" aria-hidden />WhatsApp</a></li> : null}
              {site.contact.email ? <li><a href={`mailto:${site.contact.email}`} className={`${link} inline-flex items-center gap-2`}><Mail className="h-4 w-4" aria-hidden />{site.contact.email}</a></li> : null}
              {site.contact.instagram ? <li><a href={site.contact.instagram} target="_blank" rel="noopener noreferrer" className={`${link} inline-flex items-center gap-2`}><AtSign className="h-4 w-4" aria-hidden />Instagram</a></li> : null}
              <li><a href="#contato" className={link}>Formulário de contato</a></li>
              {site.links.portal ? <li><a href={site.links.portal} className={link}>Acesso ao Portal Gravon</a></li> : null}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-500 sm:flex-row sm:justify-between">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p>{site.concept}</p>
        </div>
      </Container>
    </footer>
  );
}
