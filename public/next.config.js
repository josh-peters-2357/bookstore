/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      formats: ["image/jpg", "image/png"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "localhost",
          port: "3000",
          pathname: "/images/**",
        },
      ],
    },
  };