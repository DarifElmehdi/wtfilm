/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "yts.mx",
      },
    ],
     unoptimized: true,// Add your image host domains here
  },
};

export default nextConfig;
