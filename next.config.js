/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  }
 // basePath: '/nextjs-blog'
};

module.exports = nextConfig;
