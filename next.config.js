/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_STRAPI_URL],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },

      {
        protocol: "https",
        hostname: "strapi-bwxp.onrender.com",
        port: "",
        pathname: "/uploads/**",
      },

      {
        protocol: "https",
        hostname: "global-front-ds8f.vercel.app",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
