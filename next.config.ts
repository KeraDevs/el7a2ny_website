/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Removed for Railway deployment - use server mode
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
