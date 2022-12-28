/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "https://technicalhassanali.github.io/nextjs-blog"
};

module.exports = nextConfig;
