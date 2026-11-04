import { asset } from "@/lib/site";

/** Logotipo oficial da Gravon Company (PNG transparente em /public/brand). */
export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const h = size === "lg" ? "h-11" : "h-8 sm:h-9 lg:h-10";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset("/brand/gravon-logo.png")}
      alt="Gravon Company"
      width={472}
      height={110}
      decoding="async"
      className={`${h} w-auto select-none`}
    />
  );
}
