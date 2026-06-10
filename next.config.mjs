/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Since your repository is 'loulou', we need to set the base path
  basePath: '/loulou',
  assetPrefix: '/loulou',
};

export default nextConfig;
