import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Versão de demonstração: bloqueia indexação até NEXT_PUBLIC_ALLOW_INDEXING=true.
  if (!site.allowIndexing) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${site.url}/sitemap.xml`, host: site.url };
}
