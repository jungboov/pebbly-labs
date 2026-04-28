import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname, "../.."),
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
