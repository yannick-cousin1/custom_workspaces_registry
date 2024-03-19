/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Custom Kasm Registry',
    description: 'Custom Kasm Registry.',
    icon: '/img/logo.svg',
    listUrl: 'https://yannick-cousin1.github.io/custom_workspaces_registry/',
    contactUrl: 'https://github.com/yannick-cousin1/custom_workspaces_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/custom_workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
