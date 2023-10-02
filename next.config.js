/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-00.iconduck.com',
        port: '',
        pathname: '/assets.00/google-icon-2048x2048-czn3g8x8.png',
      },
    ],
  },
}

module.exports = nextConfig
