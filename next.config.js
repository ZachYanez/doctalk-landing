/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This is needed for GitHub Pages
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
