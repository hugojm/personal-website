/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Standalone static page served from public/rome-2026/index.html
      { source: '/rome-2026', destination: '/rome-2026/index.html' },
    ];
  },
};

module.exports = nextConfig;
