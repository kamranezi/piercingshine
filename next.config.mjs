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
      {
        protocol: 'https',
        hostname: 'loremflickr.com', // <--- ДОБАВИЛИ ЭТУ СТРОКУ
      },
    ],
  },
  webpack(config) {
    config.externals = [...config.externals, "@firebase/app-compat"];
    return config;
  },
};

export default nextConfig;