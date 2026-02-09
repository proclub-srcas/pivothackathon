import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/aftermovie",
        destination: "https://www.youtube.com/watch?v=xKLlWAJvdDQ",
        permanent: false,
      },
      {
        source: "/prospectus",
        destination:
          "https://drive.google.com/file/d/1Zu56vhpSGQQDViqBLSbrVxeTxNf2F9Wl/view",
        permanent: false,
      },
      {
        source: "/chat",
        destination:
          "https://discord.com/invite/NTueHjdPn8",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);


