import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
  images: {
    domains: [
      "files.edgestore.dev"
    ]
  }
  /* config options here */
};

export default nextConfig;
