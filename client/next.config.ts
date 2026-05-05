import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://uhabyv1o9x0gnree.public.blob.vercel-storage.com/**'),
    ]
  }
};

export default nextConfig;
