/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  basePath: '/jordanwong-website',
  assetPrefix: '/jordanwong-website/'
}

module.exports = nextConfig
