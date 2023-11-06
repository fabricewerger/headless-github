const path = require('path')
module.exports = {
  stories: [
    '../src/ui/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    }
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ]
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
        use: {
          loader: '@svgr/webpack',
          options: {
            configFile: 'public/assets/icons/svgo.config.js',
          },
        },
      }
    )
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
}
