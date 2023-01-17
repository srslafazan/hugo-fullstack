/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["../api/"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/:path*",
      },
    ];
  },
};

module.exports = withTM(nextConfig);
