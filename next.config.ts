import type { NextConfig } from "next";

// Hosted on GitHub Pages: the whole site is pre-built to static files in out/.
// Pages serves files only, so there are no API routes, no on-demand rendering
// and no custom response headers; anything dynamic runs in the browser.
const nextConfig: NextConfig = {
  output: 'export',
  // Every page is written as <path>/index.html, which GitHub Pages always resolves.
  trailingSlash: true,
  poweredByHeader: false,
  experimental: {
    staleTimes: {
      dynamic: 3600,
      static: 86400,
    },
    // Disable parallel SSR workers to avoid Turbopack module-registry race where
    // the React chunk is unregistered when a sibling worker runs a client factory.
    workerThreads: false,
    cpus: 1,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
