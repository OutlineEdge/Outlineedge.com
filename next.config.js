/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    scrollRestoration: true,
    urlImports: ["https://ipapi.co/json/"],
  },
};

module.exports = nextConfig;
