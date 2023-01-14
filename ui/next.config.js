/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // redirects: {
  //   "/api/": async () => "http://localhost:3000/*",
  // },
  // rewrites: {
  //   "/api/": async () => "http://localhost:3000/*",
  // },
};

module.exports = nextConfig;
