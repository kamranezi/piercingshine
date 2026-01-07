/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.tildacdn.com',
      },
    ],
  },
  webpack(config) {
    config.externals = [...config.externals, "@firebase/app-compat"];
    return config;
  },
};

export default nextConfig;
