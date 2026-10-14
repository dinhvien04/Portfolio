import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export a static site for Cloudflare Pages.
  output: "export",
  // Cloudflare Pages does not run Next.js image optimization server.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
