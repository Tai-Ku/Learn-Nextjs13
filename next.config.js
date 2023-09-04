/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "lh3.googleusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
  // config shadcn-ui
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mjs/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  },
};

module.exports = nextConfig;
