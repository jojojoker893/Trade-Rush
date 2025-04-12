import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/forex/:path*',
        destination: 'https://forex-api.coin.z.com/:path*', // 外部APIへ
      },
    ]
  },
};

export default nextConfig;
