import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
    // Disable parallel SSR workers to avoid Turbopack module-registry race where
    // the React chunk is unregistered when a sibling worker runs a client factory.
    workerThreads: false,
    cpus: 1,
  },
  async headers() {
    return [
      {
        source: '/hadith/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
