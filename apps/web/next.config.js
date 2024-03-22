const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
      },
    ],
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../"),
  },
};
