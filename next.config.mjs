/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "durisdev.s3.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
