import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Allow the local network IP to access Next.js dev resources (fonts, HMR, etc.)
  allowedDevOrigins: ["192.168.233.1"],

  // Pin the Turbopack workspace root to this project to avoid lockfile conflicts
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
