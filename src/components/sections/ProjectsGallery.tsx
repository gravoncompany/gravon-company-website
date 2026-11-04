"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { caseCategories, publishedCases, type CaseCategory, type CaseStudy } from "@/content/cases";
import { Icon, type IconName } from "../ui/Icon";

const categoryIcon: Record<CaseCategory, IconName> = {
  sites: "layout",
  "google-ads": "search",
  "meta-ads": "megaphone",
  automacao: "flow",
  crm: "kanban",
};

type Filter = CaseCategory | "todos";

function CaseCard({ c }: { c: CaseStudy }) {
  const label = caseCategories.find((k) => k.id === c.category)?.label;
  const testimonial = c.testimonial?.authorized ? c.testimonial : undefined;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-ink-900">
      {c.image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={c.image.src} alt={c.image.alt} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-wider text-gold-400">{label}</p>
        <h3 className="mt-2 font-display text-lg font-medium">{c.title}</h3>
        <p className="mt-1 text-sm text-mist-500">{c.client}{c.segment ? ` · ${c.segment}` : ""}</p>
        <p className="mt-3 text-sm leading-relaxed text-mist-400">{c.summary}</p>
        {c.metrics?.length ? (
          <dl className="mt-5 grid grid-cols-2 gap-3">
            {c.metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-white/[0.03] p-3">
                <dt className="text-[11px] text-mist-500">{m.label}</dt>
                <dd className="font-display text-lg text-gold-200">{m.value}</dd>
                <dd className="text-[10px] text-mist-500">{m.period} · Fonte: {m.source}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {testimonial ? (
          <blockquote className="mt-5 border-l-2 border-gold-500/60 pl-4 text-sm italic text-mist-300">
            “{testimonial.quote}”
            <footer className="mt-2 not-italic text-xs text-mist-500">— {testimonial.author}{testimonial.role ? `, ${testimonial.role}` : ""}</footer>
          </blockquote>
        ) : null}
        {c.url ? (
          <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-sm font-medium text-gold-300 hover:underline">Ver projeto →</a>
        ) : null}
      </div>
    </article>
  );
}

function PlaceholderCard({ category }: { category: CaseCategory }) {
  const label = caseCategories.find((k) => k.id === category)?.label;
  return (
    <div className="flex h-full flex-col rounded-3xl border border-dashed border-white/[0.1] bg-white/[0.015] p-6">
      <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(217,180,110,.06),transparent_60%)]">
        <Icon name={categoryIcon[category]} className="size-10 text-gold-500/60" />
      </div>
      <p className="mt-5 text-xs uppercase tracking-wider text-gold-400">{label}</p>
      <p className="mt-2 font-display text-lg font-medium text-mist-300">Case em preparação</p>
      <p className="mt-2 text-sm leading-relaxed text-mist-500">
        Este espaço receberá capturas reais, métricas verificadas e depoimentos autorizados.
      </p>
    </div>
  );
}

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Filter>("todos");

  const visible = useMemo(
    () => (filter === "todos" ? publishedCases : publishedCases.filter((c) => c.category === filter)),
    [filter],
  );
  // Categorias sem case publicado exibem um espaço reservado.
  const emptyCategories = useMemo(() => {
    const cats = filter === "todos" ? caseCategories.map((c) => c.id) : [filter];
    return cats.filter((id) => !publishedCases.some((c) => c.category === id));
  }, [filter]);

  const chips: { id: Filter; label: string }[] = [{ id: "todos", label: "Todos" }, ...caseCategories];

  return (
    <div className="mt-12">
      <div role="group" aria-label="Filtrar projetos por categoria" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
        {chips.map((c) => {
          const on = c.id === filter;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(c.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${on ? "border-gold-400 bg-gold-400 text-ink-950" : "border-white/10 text-mist-300 hover:border-gold-400/50"}`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((c) => (
            <motion.li key={c.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
              <CaseCard c={c} />
            </motion.li>
          ))}
          {emptyCategories.map((id) => (
            <motion.li key={`ph-${id}`} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
              <PlaceholderCard category={id} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
