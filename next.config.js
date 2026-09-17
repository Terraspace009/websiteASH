/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }] },
  outputFileTracingRoot: __dirname,
  async rewrites() {
    return [{
      source: "/experiments/terra-hand-performer",
      destination: "/experiments/terra-hand-performer/index.html",
    }];
  },
};
module.exports = nextConfig;
