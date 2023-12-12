/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["i.imgur.com"],
    unoptimized: true
  }
}

module.exports = nextConfig
