/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const tokens = require('./src/styles/_generated/json/styles.json')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette')

const {
  ParagraphsTextXsRegular: TextXs,
  ParagraphsTextSmRegular: TextSm,
  ParagraphsTextMdBaseRegular: TextMd,
  ParagraphsTextLgRegular: TextLg,
  ParagraphsTextXlRegular: TextXl,
  HeadingsHeadingXs: HeadingXs,
  HeadingsHeadingSm: HeadingSm,
  HeadingsHeadingMd: HeadingMd,
  HeadingsHeadingLg: HeadingLg,
  HeadingsHeadingXl: HeadingXl,
  HeadingsHeading2xl: Heading2xl,
  HeadingsHeading3xl: Heading3xl,
} = tokens

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontSize: {
      xs: [
        TextXs.fontSize,
        {
          lineHeight: TextXs.lineHeight,
          letterSpacing: TextXs.letterSpacing,
          fontWeight: TextXs.fontWeight,
          fontFamily: TextXs.fontFamily,
          fontStyle: TextXs.fontStyle,
          fontStretch: TextXs.fontStretch,
          textTransform: TextXs.textCase,
        },
      ],
      sm: [
        TextSm.fontSize,
        {
          lineHeight: TextSm.lineHeight,
          letterSpacing: TextSm.letterSpacing,
          fontWeight: TextSm.fontWeight,
          fontFamily: TextSm.fontFamily,
          fontStyle: TextSm.fontStyle,
          fontStretch: TextSm.fontStretch,
          textTransform: TextSm.textCase,
        },
      ],
      md: [
        TextMd.fontSize,
        {
          lineHeight: TextMd.lineHeight,
          letterSpacing: TextMd.letterSpacing,
          fontWeight: TextMd.fontWeight,
          fontFamily: TextMd.fontFamily,
          fontStyle: TextMd.fontStyle,
          fontStretch: TextMd.fontStretch,
          textTransform: TextMd.textCase,
        },
      ],
      base: [
        TextMd.fontSize,
        {
          lineHeight: TextMd.lineHeight,
          letterSpacing: TextMd.letterSpacing,
          fontWeight: TextMd.fontWeight,
          fontFamily: TextMd.fontFamily,
          fontStyle: TextMd.fontStyle,
          fontStretch: TextMd.fontStretch,
          textTransform: TextMd.textCase,
        },
      ],
      lg: [
        TextLg.fontSize,
        {
          lineHeight: TextLg.lineHeight,
          letterSpacing: TextLg.letterSpacing,
          fontWeight: TextLg.fontWeight,
          fontFamily: TextLg.fontFamily,
          fontStyle: TextLg.fontStyle,
          fontStretch: TextLg.fontStretch,
          textTransform: TextLg.textCase,
        },
      ],
      xl: [
        TextXl.fontSize,
        {
          lineHeight: TextXl.lineHeight,
          letterSpacing: TextXl.letterSpacing,
          fontWeight: TextXl.fontWeight,
          fontFamily: TextXl.fontFamily,
          fontStyle: TextXl.fontStyle,
          fontStretch: TextXl.fontStretch,
          textTransform: TextXl.textCase,
        },
      ],
    },
    headingSize: {
      xs: [
        HeadingXs.fontSize,
        {
          lineHeight: HeadingXs.lineHeight,
          letterSpacing: HeadingXs.letterSpacing,
          fontWeight: HeadingXs.fontWeight,
          fontStyle: HeadingXs.fontStyle,
          fontStretch: HeadingXs.fontStretch,
          textTransform: HeadingXs.textCase,
        },
      ],
      sm: [
        HeadingSm.fontSize,
        {
          lineHeight: HeadingSm.lineHeight,
          letterSpacing: HeadingSm.letterSpacing,
          fontWeight: HeadingSm.fontWeight,
          fontStyle: HeadingSm.fontStyle,
          fontStretch: HeadingSm.fontStretch,
          textTransform: HeadingSm.textCase,
        },
      ],
      md: [
        HeadingMd.fontSize,
        {
          lineHeight: HeadingMd.lineHeight,
          letterSpacing: HeadingMd.letterSpacing,
          fontWeight: HeadingMd.fontWeight,
          fontStyle: HeadingMd.fontStyle,
          fontStretch: HeadingMd.fontStretch,
          textTransform: HeadingMd.textCase,
        },
      ],
      lg: [
        HeadingLg.fontSize,
        {
          lineHeight: HeadingLg.lineHeight,
          letterSpacing: HeadingLg.letterSpacing,
          fontWeight: HeadingLg.fontWeight,
          fontStyle: HeadingLg.fontStyle,
          fontStretch: HeadingLg.fontStretch,
          textTransform: HeadingLg.textCase,
        },
      ],
      xl: [
        HeadingXl.fontSize,
        {
          lineHeight: HeadingXl.lineHeight,
          letterSpacing: HeadingXl.letterSpacing,
          fontWeight: HeadingXl.fontWeight,
          fontStyle: HeadingXl.fontStyle,
          fontStretch: HeadingXl.fontStretch,
          textTransform: HeadingXl.textCase,
        },
      ],
      '2xl': [
        Heading2xl.fontSize,
        {
          lineHeight: Heading2xl.lineHeight,
          letterSpacing: Heading2xl.letterSpacing,
          fontWeight: Heading2xl.fontWeight,
          fontStyle: Heading2xl.fontStyle,
          fontStretch: Heading2xl.fontStretch,
          textTransform: Heading2xl.textCase,
        },
      ],
      '3xl': [
        Heading3xl.fontSize,
        {
          lineHeight: Heading3xl.lineHeight,
          letterSpacing: Heading3xl.letterSpacing,
          fontWeight: Heading3xl.fontWeight,
          fontStyle: Heading3xl.fontStyle,
          fontStretch: Heading3xl.fontStretch,
          textTransform: Heading3xl.textCase,
        },
      ],
    },
    screens: {
      sm: `${tokens.BreakpointsSm}px`,
      md: `${tokens.BreakpointsMd}px`,
      lg: `${tokens.BreakpointsLg}px`,
      xl: `${tokens.BreakpointsXl}px`,
    },
    colors: {
      primary: {
        DEFAULT: tokens.ColorPrimary500Base,
        base: tokens.ColorPrimary500Base,
        900: tokens.ColorPrimary900,
        800: tokens.ColorPrimary800,
        700: tokens.ColorPrimary700,
        600: tokens.ColorPrimary600,
        500: tokens.ColorPrimary500Base,
        400: tokens.ColorPrimary400,
        200: tokens.ColorPrimary200,
        100: tokens.ColorPrimary100,
        50: tokens.ColorPrimary50,
        25: tokens.ColorPrimary25,
      },
      secondary: {
        DEFAULT: tokens.ColorSecondary500Base,
        base: tokens.ColorSecondary500Base,
        900: tokens.ColorSecondary900,
        800: tokens.ColorSecondary800,
        700: tokens.ColorSecondary700,
        600: tokens.ColorSecondary600,
        500: tokens.ColorSecondary500Base,
        400: tokens.ColorSecondary400,
        300: tokens.ColorSecondary300,
        200: tokens.ColorSecondary200,
        100: tokens.ColorSecondary100,
        50: tokens.ColorSecondary50,
        25: tokens.ColorSecondary25,
      },
      surface: {
        black: tokens.ColorSurfaceBlack,
        900: tokens.ColorSurface900,
        800: tokens.ColorSurface800,
        700: tokens.ColorSurface700,
        600: tokens.ColorSurface600,
        500: tokens.ColorSurface500,
        400: tokens.ColorSurface400,
        300: tokens.ColorSurface300,
        200: tokens.ColorSurface200,
        150: tokens.ColorSurface150,
        100: tokens.ColorSurface100,
        50: tokens.ColorSurface50,
        white: tokens.ColorSurfaceWhite,
      },
      success: {
        700: tokens.ColorSystemSuccess700,
        500: tokens.ColorSystemSuccess500,
        50: tokens.ColorSystemSuccess50,
      },
      warning: {
        500: tokens.ColorSystemWarning500,
        50: tokens.ColorSystemWarning50,
      },
      error: {
        500: tokens.ColorSystemError500,
        50: tokens.ColorSystemError50,
      },
      info: {
        500: tokens.ColorSystemInfo500,
        50: tokens.ColorSystemInfo50,
        25: tokens.ColorSystemInfo25,
      },
      attention: {
        DEFAULT: tokens.ColorSystemAttention500,
      },
      black: '#000000',
      white: '#FFFFFF',
    },
    borderRadius: {
      none: 0,
      DEFAULT: tokens.BorderRadiusMd,
      xs: tokens.BorderRadiusXs,
      sm: tokens.BorderRadiusSm,
      md: tokens.BorderRadiusMd,
      lg: tokens.BorderRadiusLg,
      xl: tokens.BorderRadiusXl,
      '2xl': tokens.BorderRadius2xl,
      '3xl': tokens.BorderRadius3xl,
      full: '99999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      sm: tokens.BorderWidthSm,
      md: tokens.BorderWidthMd,
      lg: tokens.BorderWidthLg,
      xl: tokens.BorderWidthXl,
    },
    outlineWidth: {
      xs: tokens.SpacingXs,
      sm: tokens.SpacingSm,
    },
    extend: {
      spacing: {
        xs: tokens.SpacingXs,
        sm: tokens.SpacingSm,
        md: tokens.SpacingMd,
        lg: tokens.SpacingLg,
        xl: tokens.SpacingXl,
        '2xl': tokens.Spacing2xl,
        '3xl': tokens.Spacing3xl,
        '4xl': tokens.Spacing4xl,
      },
      transitionProperty: {
        colors:
          'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        scaleIn: {
          from: { transform: 'scale(1.2)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
        slideIn: {
          from: { transform: 'translateY(5px)', opacity: 0 },
          to: { transform: 'translateY(0px)', opacity: 1 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '60%': { transform: 'rotate(215deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        jump: {
          '0%': { transform: 'translateY(0px)' },
          '60%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        drop: {
          '0%': { transform: 'translateY(0px)' },
          '60%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shake: {
          '0%': { transform: 'translateY(0px)' },
          '10%': { transform: 'translateY(-5px)' },
          '20%': { transform: 'translateX(-5px)' },
          '30%': { transform: 'translateY(5px)' },
          '40%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateX(-5px)' },
          '70%': { transform: 'translateY(5px)' },
          '80%': { transform: 'translateX(5px)' },
          '90%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        stretch: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        fadein: 'fadeIn 150ms ease-in',
        fadeout: 'fadeOut 150ms ease-in',
        scalein: 'scaleIn 120ms ease-out',
        slidein: 'slideIn 130ms ease-in',
        wiggle: 'wiggle 150ms ease-in',
        rotate: 'rotate 650ms ease-in-out',
        jump: 'jump 650ms ease-in-out',
        drop: 'drop 650ms ease-in-out',
        shake: 'shake 650ms ease-in-out',
        stretch: 'stretch 650ms ease-in-out',
        radixDown: 'slideDown 300ms ease-out',
        radixUp: 'slideUp 300ms ease-out',
      },
      boxShadow: {
        'outer-md': tokens.ShadowOuterMdDrop,
        'outer-md-hover': tokens.ShadowOuterMdHover,
        'outer-md-focus': tokens.ShadowOuterMdFocus,
        'outer-md-pressed': tokens.ShadowOuterMdPressed,
        'inner-md': tokens.ShadowInsetMdPressed,
        'inner-md-hover': tokens.ShadowInsetMdPressed,
        'inner-md-focus': tokens.ShadowInsetMdPressed,
        'inner-md-pressed': tokens.ShadowInsetMdPressed,
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      matchUtilities(
        {
          heading: (value) => ({
            lineHeight: value[1].lineHeight,
            letterSpacing: value[1].letterSpacing,
            fontWeight: value[1].fontWeight,
            fontFamily: `'Inter', sans-serif`,
            fontStyle: value[1].fontStyle,
            fontStretch: value[1].fontStretch,
            textTransform: value[1].textTransform,
            fontSize: value[0],
          }),
        },
        { values: theme('headingSize') }
      )

      const newAnimationDelayUtility = {
        '.animation-delay-100': {
          animationDelay: '100ms',
        },
        '.animation-delay-150': {
          animationDelay: '150ms',
        },
        '.animation-delay-200': {
          animationDelay: '200ms',
        },
        '.animation-delay-300': {
          animationDelay: '300ms',
        },
        '.animation-delay-500': {
          animationDelay: '500ms',
        },
      }
      addUtilities(newAnimationDelayUtility)

      /**
       * Dynamic utility classes to modify SVG coloring by state.
       *
       * E.g. "svg-disabled-surface-300" where "disabled" is the state and "surface-300" the color.
       */
      const states = ['default', 'disabled', 'active', 'hover']
      states.forEach((state) => {
        matchUtilities(
          {
            [`svg-${state}`]: (value) => ({
              [`&${state !== 'default' ? ':' + state : ''}>span>svg>path`]: {
                fill: value,
                stroke: value,
              },
            }),
          },
          { values: flattenColorPalette.default(theme('colors')) }
        )
      })
    }),
  ],
}
