"use client";

import { useMemo, useState } from "react";
import { ImageIcon, SquareKanban, LayoutTemplate, Megaphone, Search, Workflow, type LucideIcon } from "lucide-react";
import { asset } from "@/lib/site";
import { caseCategories, publishedCases, type CaseCategory, type CaseStudy } from "@/content/cases";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const icons: Record<CaseCategory, LucideIcon> = { sites: LayoutTemplate, "google-ads": Search, "meta-ads": Megaphone, automacao: Workflow, crm: SquareKanban };
type Filter = CaseCategory | "todos";

function CaseCard({ c }: { c: CaseStudy }) {
  const label = caseCategories.find((k) => k.id === c.category)?.label;
  const t = c.testimonial?.authorized ? c.testimonial : undefined;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-900/5">
      {c.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset(c.image.src)} alt={c.image.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-gold-700">{label}</p>
        <h3 className="mt-2 text-lg font-bold text-ink-900">{c.title}</h3>
        <p className="mt-1 text-sm text-zinc-500">{c.client}{c.segment ? ` · ${c.segment}` : ""}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{c.summary}</p>
        {c.metrics?.length ? (
          <dl className="mt-5 grid grid-cols-2 gap-3">
            {c.metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-sand-50 p-3 ring-1 ring-ink-900/5">
                <dt className="text-[11px] text-zinc-500">{m.label}</dt>
                <dd className="font-display text-lg font-bold text-ink-900">{m.value}</dd>
                <dd className="text-[10px] text-zinc-500">{m.period} · Fonte: {m.source}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {t ? (
          <blockquote className="mt-5 border-l-2 border-gold-400 pl-4 text-sm text-zinc-700">
            “{t.quote}”
            <footer className="mt-2 text-xs text-zinc-500">— {t.author}{t.role ? `, ${t.role}` : ""}</footer>
          </blockquote>
        ) : null}
        {c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-sm font-semibold text-gold-700 hover:underline">Ver projeto →</a> : null}
      </div>
    </article>
  );
}

function Placeholder({ category }: { category: CaseCategory }) {
  const Icon = icons[category];
  const label = caseCategories.find((k) => k.id === category)?.label;
  return (
    <div className="flex h-full flex-col rounded-2xl border-2 border-dashed border-ink-900/10 bg-sand-50 p-6">
      <div className="flex aspect-[16/7] items-center justify-center rounded-xl bg-white ring-1 ring-ink-900/5">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-50 text-gold-700 ring-1 ring-gold-200/70">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[.14em] text-gold-700">{label}</p>
      <p className="mt-2 font-display text-lg font-bold text-ink-900">Case em preparação</p>
      <p className="mt-1.5 flex items-start gap-2 text-sm leading-relaxed text-zinc-500">
        <ImageIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        Capturas reais, métricas verificadas e depoimentos autorizados.
      </p>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("todos");
  const visible = useMemo(() => (filter === "todos" ? publishedCases : publishedCases.filter((c) => c.category === filter)), [filter]);
  const empty = useMemo(() => {
    const cats = filter === "todos" ? caseCategories.map((c) => c.id) : [filter];
    return cats.filter((id) => !publishedCases.some((c) => c.category === id));
  }, [filter]);
  const chips: { id: Filter; label: string }[] = [{ id: "todos", label: "Todos" }, ...caseCategories];

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            id="projetos-title"
            eyebrow="Projetos e cases"
            title="Projetos reais, apresentados com transparência"
            description="Publicamos apenas cases autorizados pelos clientes, com métricas de fonte e período identificados e depoimentos aprovados."
          />
          <Reveal delay={120}>
            <div role="group" aria-label="Filtrar projetos por categoria" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:justify-end lg:px-0">
              {chips.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={c.id === filter}
                  onClick={() => setFilter(c.id)}
                  className={`shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${c.id === filter ? "bg-ink-900 text-white" : "bg-sand-50 text-zinc-700 ring-1 ring-ink-900/10 hover:ring-ink-900/25"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => <li key={c.slug}><CaseCard c={c} /></li>)}
          {empty.map((id) => <li key={`ph-${id}`}><Placeholder category={id} /></li>)}
        </ul>
      </Container>
    </section>
  );
}
