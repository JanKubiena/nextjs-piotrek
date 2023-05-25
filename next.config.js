/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
        appDir: true,
        typedRoutes: true,
    },
    reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
    images: {
      formats: ['image/avif', 'image/webp'],
      unoptimized: false,
    },
  };



