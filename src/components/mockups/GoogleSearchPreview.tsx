import { EllipsisVertical, Mic, Search } from "lucide-react";
import { example } from "@/content/example";
import { ExampleMark } from "./BrandLogos";

const G = [["G", "#4285F4"], ["o", "#EA4335"], ["o", "#FBBC04"], ["g", "#4285F4"], ["l", "#34A853"], ["e", "#EA4335"]] as const;

/** Simulação de uma página de resultados do Google com anúncio Patrocinado (empresa fictícia). */
export function GoogleSearchPreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-white text-left font-[Arial,Helvetica,sans-serif] text-[#202124] shadow-card ring-1 ring-black/10">
      <div className="flex items-center gap-3 border-b border-[#ebebeb] px-3.5 py-3">
        <span className="text-[19px] font-bold leading-none tracking-tight" aria-label="Google">
          {G.map(([l, c], i) => <span key={i} style={{ color: c }}>{l}</span>)}
        </span>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#dfe1e5] px-3 py-1.5 shadow-[0_1px_4px_rgba(32,33,36,.12)]">
          <span className="min-w-0 flex-1 truncate text-[12.5px]">{example.search}</span>
          <Mic className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" aria-hidden />
          <Search className="h-3.5 w-3.5 shrink-0 text-[#4285F4]" aria-hidden />
        </div>
      </div>
      <div className="flex gap-4 border-b border-[#ebebeb] px-3.5 pt-2 text-[11px] text-[#5f6368]" aria-hidden>
        <span className="border-b-[3px] border-[#1a73e8] pb-1.5 font-semibold text-[#1a73e8]">Todas</span>
        <span className="pb-1.5">Notícias</span>
        <span className="pb-1.5">Imagens</span>
        <span className="pb-1.5">Maps</span>
      </div>

      <div className="space-y-3 px-3.5 py-3.5">
        <div>
          <p className="text-[11px] font-bold">Patrocinado</p>
          <div className="mt-1.5 flex items-center gap-2">
            <ExampleMark className="h-6 w-6 text-[11px]" />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[12px]">{example.name}</p>
              <p className="truncate text-[10.5px] text-[#4d5156]">https://{example.domain}</p>
            </div>
            <EllipsisVertical className="ml-auto h-3.5 w-3.5 shrink-0 text-[#5f6368]" aria-hidden />
          </div>
          <p className="mt-1.5 text-[15px] leading-snug text-[#1a0dab]">{example.adTitle}</p>
          <p className="mt-1 text-[12px] leading-snug text-[#4d5156]">{example.adDescription}</p>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11.5px] text-[#1a0dab]">
            {example.sitelinks.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>
        <div className="border-t border-[#ebebeb] pt-3 opacity-50" aria-hidden>
          <div className="h-2 w-28 rounded-full bg-[#dadce0]" />
          <div className="mt-2 h-2.5 w-3/4 rounded-full bg-[#c5cae9]" />
          <div className="mt-1.5 h-2 w-11/12 rounded-full bg-[#e8eaed]" />
        </div>
      </div>
    </div>
  );
}
