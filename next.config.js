/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/images/posts/",
  },
  basePath: "/nextjs-blog/"
};

module.exports = nextConfig;
