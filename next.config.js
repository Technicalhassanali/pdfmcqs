/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nextjs-blog",
  assetPrefix: "/nextjs-blog",
};

module.exports = nextConfig;