declare module "next-pwa" {
  import { type NextConfig } from "next";

  interface PWAOptions {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    [key: string]: string | boolean | undefined;
  }

  export default function withPWA(
    pwaOptions: PWAOptions,
  ): (nextConfig: NextConfig) => NextConfig;
}
