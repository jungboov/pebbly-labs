import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
