/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images (you can restrict later)
      },
    ],
    domains: ['localhost'],
  },

  // Performance & SEO optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable React Server Components optimizations
  experimental: {
    optimizePackageImports: ['lodash', 'gsap', 'lucide-react'],
  },

  // Metadata base for Open Graph images
  metadataBase: new URL('https://thehotinteriors.com'), // Change to your real domain later

  // Headers for better security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;