/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/fund',
        destination: 'https://docsend.com/view/gxy7zqnwwbrnxnz3',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
