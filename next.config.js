/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gukpisxmjvmfukxhkmrt.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
