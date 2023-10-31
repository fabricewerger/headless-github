/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        include: [path.resolve(__dirname, 'public/assets/icons')],
        use: {
          loader: '@svgr/webpack',
          options: {
            configFile: 'public/assets/icons/svgo.config.js',
          },
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        exclude: [path.resolve(__dirname, 'public/assets/icons')],
        use: {
          loader: '@svgr/webpack',
        },
      }
    )
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
}

module.exports = nextConfig
