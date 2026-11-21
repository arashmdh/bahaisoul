/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_HAS_GOOGLE_AUTH:
      process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
        ? "true"
        : "false",
    NEXT_PUBLIC_ALLOW_DEV_LOGIN:
      process.env.ALLOW_DEV_LOGIN === "true" ||
      process.env.NODE_ENV !== "production"
        ? "true"
        : "false",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/temples/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/doors/metaphysics", destination: "/doors/worlds-beyond", permanent: true },
      { source: "/doors/mysticism", destination: "/doors/seven-valleys", permanent: true },
      { source: "/doors/family", destination: "/doors/self-knowledge", permanent: true },
      { source: "/doors/arts", destination: "/doors/sacred-arts", permanent: true },
      { source: "/doors/society", destination: "/doors/spiritualizing-world", permanent: true },
      { source: "/doors/science-religion", destination: "/doors/cosmic-harmony", permanent: true },
      { source: "/doors/devotional", destination: "/doors/dreams-intuition", permanent: true },
      { source: "/doors/seekers-path", destination: "/doors/self-knowledge", permanent: true },
      { source: "/doors/scholars", destination: "/scholars", permanent: true },
    ];
  },
};

export default nextConfig;
