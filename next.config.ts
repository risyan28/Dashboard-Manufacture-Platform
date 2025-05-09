import withPWA from "next-pwa";
import type { NextConfig } from "next";

process.on("unhandledRejection", (reason) => {
  console.log("🔥 Unhandled Rejection:", reason);
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
} as const;

export default withPWA(pwaConfig)(nextConfig);
