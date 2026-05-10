/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  turbopack: {
    // Ensure Turbopack resolves the project root correctly
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
