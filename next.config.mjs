/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images (you can restrict later)
      },
    ],
    domains: ['localhost', 'thehotinteriors.com'], // Add your domain here
  },

  // Performance & SEO optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable React Server Components optimizations
  experimental: {
    optimizePackageImports: ['lodash', 'gsap', 'lucide-react'],
  },


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