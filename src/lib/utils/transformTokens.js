const StyleDictionary = require('style-dictionary')
const baseConfig = require('../../../sd.config.json')

const remTokens = ['lineHeights', 'fontSizes', 'spacing']

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: (token) => {
    return remTokens.includes(token.type) && token.value !== 0
  },
  transformer: (token) => {
    return `${token.value.replace('px', '') / 16}rem`
  },
})

StyleDictionary.registerTransform({
  name: 'size/percent',
  type: 'value',
  matcher: (token) => {
    return token.unit === 'percent' && token.value !== 0
  },
  transformer: (token) => {
    return `${token.value}%`
  },
})

StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  transforms: StyleDictionary.transformGroup['css'].concat([
    'size/pxToRem',
    'size/percent',
  ]),
})

StyleDictionary.registerTransformGroup({
  name: 'custom/scss',
  transforms: StyleDictionary.transformGroup['less'].concat([
    'size/pxToRem',
    'size/percent',
  ]),
})

StyleDictionary.registerTransformGroup({
  name: 'custom/json',
  transforms: StyleDictionary.transformGroup['js'].concat([
    'size/pxToRem',
    'size/percent',
  ]),
})

StyleDictionary.registerFilter({
  name: 'validToken',
  matcher: function (token) {
    return ['dimension', 'string', 'number', 'color'].includes(token.type)
  },
})

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig)

StyleDictionaryExtended.buildAllPlatforms()
