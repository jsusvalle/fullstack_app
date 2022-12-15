/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    API_URL: "https://fullstackapp-production.up.railway.app/api",
  },
};

module.exports = nextConfig;
