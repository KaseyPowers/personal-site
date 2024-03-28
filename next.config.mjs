import  bundlAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundlAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gravatar.com",
      },
    ],
  },
};
export default withBundleAnalyzer(nextConfig)
