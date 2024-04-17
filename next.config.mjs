/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: process.env.ENV_HOSTNAME,
         },
      ],
   },
};

export default nextConfig;
