import { LogoMark } from "../ui/Logo";
import { Icon, type IconName } from "../ui/Icon";

type Node = { label: string; icon: IconName; angle: number };
type Ring = { inset: string; duration: string; reverse?: boolean; nodes: Node[] };

const rings: Ring[] = [
  // Mesma velocidade e direção, nós espaçados em 60°: os rótulos nunca se sobrepõem.
  { inset: "26%", duration: "80s", nodes: [{ label: "IA", icon: "sparkle", angle: 0 }, { label: "CRM", icon: "kanban", angle: 180 }] },
  { inset: "13%", duration: "80s", nodes: [{ label: "Google Ads", icon: "search", angle: 60 }, { label: "Dados", icon: "chart", angle: 240 }] },
  { inset: "0%", duration: "80s", nodes: [{ label: "Meta Ads", icon: "megaphone", angle: 120 }, { label: "WhatsApp", icon: "chat", angle: 300 }] },
];

function OrbitNode({ node, duration, reverse }: { node: Node; duration: string; reverse?: boolean }) {
  return (
    <div className="absolute inset-0" style={{ transform: `rotate(${node.angle}deg)` }}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        {/* Contra-rotação para manter o rótulo na horizontal. */}
        <div style={{ transform: `rotate(${-node.angle}deg)` }}>
          <div
            className={reverse ? "animate-orbit" : "animate-orbit-reverse"}
            style={{ ["--orbit-duration" as string]: duration }}
          >
            <span className="glass flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-medium text-mist-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,.8)] sm:text-xs">
              <Icon name={node.icon} className="size-3.5 text-gold-300" />
              {node.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]" role="img" aria-label="Ilustração: marketing, dados, CRM e inteligência artificial orbitando o núcleo Gravon">
      <div aria-hidden className="absolute inset-[18%] rounded-full bg-[radial-gradient(closest-side,rgba(217,180,110,0.28),transparent)] blur-2xl" />

      {rings.map((ring, i) => (
        <div key={i} aria-hidden className="absolute" style={{ inset: ring.inset }}>
          <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
            <circle cx="50" cy="50" r="49.6" fill="none" stroke="url(#orbit-grad)" strokeWidth="0.35" strokeDasharray="1 3" className="animate-dash" />
          </svg>
          <div
            className={`absolute inset-0 ${ring.reverse ? "animate-orbit-reverse" : "animate-orbit"}`}
            style={{ ["--orbit-duration" as string]: ring.duration }}
          >
            {ring.nodes.map((n) => (
              <OrbitNode key={n.label} node={n} duration={ring.duration} reverse={ring.reverse} />
            ))}
          </div>
        </div>
      ))}

      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="orbit-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ecd29a" stopOpacity="0.9" />
            <stop offset="1" stopColor="#9c773a" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Núcleo */}
      <div aria-hidden className="absolute inset-[38%] flex items-center justify-center">
        <div className="absolute inset-0 animate-pulse-soft rounded-full bg-gold-400/20 blur-xl" />
        <div className="relative flex size-full items-center justify-center rounded-full border border-gold-300/40 bg-[radial-gradient(circle_at_35%_30%,#2a2418,#0a0a0e_70%)] shadow-[inset_0_0_30px_rgba(217,180,110,.25),0_0_60px_-10px_rgba(217,180,110,.5)]">
          <LogoMark className="size-1/2" />
        </div>
      </div>

      {/* Cartões flutuantes (ilustrativos, sem dados reais) */}
      <div aria-hidden className="absolute -left-2 top-[12%] hidden animate-float sm:block">
        <div className="glass rounded-2xl px-4 py-3 text-xs shadow-2xl">
          <p className="text-mist-500">Novo contato</p>
          <p className="mt-1 flex items-center gap-2 font-medium"><span className="size-1.5 rounded-full bg-emerald-400" />Origem: campanha</p>
        </div>
      </div>
      <div aria-hidden className="absolute -right-2 bottom-[14%] hidden animate-float sm:block" style={{ animationDelay: "-3s" }}>
        <div className="glass rounded-2xl px-4 py-3 text-xs shadow-2xl">
          <p className="text-mist-500">Qualificação com IA</p>
          <p className="mt-1 flex items-center gap-2 font-medium text-gold-200"><Icon name="sparkle" className="size-3.5" />Pronto para atendimento</p>
        </div>
      </div>
    </div>
  );
}
