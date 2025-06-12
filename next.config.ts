/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set basePath and assetPrefix for GitHub Pages deployment
  // This will be the repository name when deployed to GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/el7a2ny_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/el7a2ny_website/' : '',
};

module.exports = nextConfig;
