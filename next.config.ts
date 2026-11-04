import type { NextConfig } from "next";

// STATIC_EXPORT=1 gera uma versão estática (pasta out/) para demonstração/preview.
const isStaticExport = process.env.STATIC_EXPORT === "1";
// Subcaminho para hospedagem de demonstração (ex.: GitHub Pages em /gravon-company-website).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || undefined;

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(basePath ? { basePath } : {}),
  ...(isStaticExport
    ? { output: "export", images: { unoptimized: true }, trailingSlash: true }
    : {
        images: { formats: ["image/avif", "image/webp"] },
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
