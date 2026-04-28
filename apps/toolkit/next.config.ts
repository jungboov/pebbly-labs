import type { NextConfig } from "next";
import path from "path";

const monorepoRoot = path.resolve(__dirname, "../..");

const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot,
  turbopack: {
    root: monorepoRoot,
  },
  async rewrites() {
    return [
      {
        source: '/pixel-mouse',
        destination: '/pixel-mouse.html',
      },
      {
        source: '/pixel-mouse/showcase',
        destination: '/pixel-mouse/showcase.html',
      },
    ];
  },
};

export default nextConfig;
