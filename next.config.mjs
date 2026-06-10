/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to https://<username>.github.io/<repository>/
  // uncomment the lines below and replace 'repository' with your actual repository name
  // basePath: '/repository',
  // assetPrefix: '/repository',
};

export default nextConfig;
