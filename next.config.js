/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
}

module.exports = nextConfig
