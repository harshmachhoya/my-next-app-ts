/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["localhost"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
