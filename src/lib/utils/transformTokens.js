const StyleDictionary = require('style-dictionary')
const baseConfig = require('../../../sd.config.json')
const tinycolor = require('tinycolor2')

const remTokens = ['lineHeights', 'fontSizes', 'spacing', 'borderRadius']

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

StyleDictionary.registerTransform({
  name: 'size/toPx',
  type: 'value',
  matcher: (token) => {
    return token.type === 'borderWidth'
  },
  transformer: (token) => {
    return `${token.value}px`
  },
})

StyleDictionary.registerTransform({
  name: 'color/toRGB',
  type: 'value',
  matcher: (token) => {
    return token.type === 'color' && token.attributes.category !== 'gradients'
  },
  transformer: (token) => {
    return tinycolor(token.value).toRgbString()
  },
})

StyleDictionary.registerTransform({
  name: 'effect/dropShdaow',
  type: 'value',
  matcher: (token) => {
    return token.attributes.category === 'shadow'
  },
  transformer: (token) => {
    const { blur, color, x, y, spread } = token.original.value
    const isInnerShadow = token.attributes.type === 'inset' ? 'inset' : ''

    return `${isInnerShadow} ${x}px ${y}px ${blur}px ${spread}px ${tinycolor(
      color
    ).toRgbString()}`
  },
})

StyleDictionary.registerTransform({
  name: 'font/weight',
  type: 'value',
  matcher: (token) => {
    return token.type === 'fontWeights'
  },
  transformer: (token) => {
    return ((token) => {
      switch (token) {
        case 'Regular':
          return '400'
        case 'Bold':
          return '700'
        default:
          return '400'
      }
    })(token.value)
  },
})

StyleDictionary.registerTransform({
  name: 'font/letterSpacing',
  type: 'value',
  matcher: (token) => {
    return token.type === 'letterSpacing'
  },
  transformer: (token) => {
    const letterSpacing = Number(token.value.replace('%', ''))
    return letterSpacing ? `${letterSpacing / 100}em` : '0em'
  },
})

StyleDictionary.registerTransform({
  name: 'name/color',
  type: 'name',
  matcher: (token) => {
    return token.type === 'color'
  },
  transformer: (token) => {
    return `Color${token.name}`
  },
})

StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  transforms: StyleDictionary.transformGroup['css'].concat([
    'size/pxToRem',
    'size/toPx',
    'size/percent',
    'font/weight',
    'font/letterSpacing',
    'effect/dropShdaow',
    'name/color',
    'color/toRGB',
  ]),
})

StyleDictionary.registerTransformGroup({
  name: 'custom/scss',
  transforms: StyleDictionary.transformGroup['less'].concat([
    'size/pxToRem',
    'size/toPx',
    'size/percent',
    'font/weight',
    'font/letterSpacing',
    'effect/dropShdaow',
    'name/color',
    'color/toRGB',
  ]),
})

StyleDictionary.registerTransformGroup({
  name: 'custom/json',
  transforms: StyleDictionary.transformGroup['js'].concat([
    'size/pxToRem',
    'size/toPx',
    'size/percent',
    'font/weight',
    'font/letterSpacing',
    'effect/dropShdaow',
    'name/color',
    'color/toRGB',
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
