import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // Use false for a temporary redirect (like during development)
      },
    ];
  },
};


export default nextConfig;
