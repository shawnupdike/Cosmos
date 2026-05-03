const path = require('path')

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}

module.exports = nextConfig