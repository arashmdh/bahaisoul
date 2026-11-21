/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
