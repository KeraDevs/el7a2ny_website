/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: {
    module: { rules: { test: RegExp; type: string; use: string }[] };
  }) => {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
      use: "json-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
