/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const tokens = require('./src/styles/_generated/json/styles.json')

/* TODO: Move to seperate file? */
const convertToRem = (value) => {
  return `${value / 16}rem`
}

const {
  FontParagraphsTextXsRegular: TextXs,
  FontParagraphsTextSmRegular: TextSm,
  FontParagraphsTextMdBaseRegular: TextMd,
  FontParagraphsTextLgRegular: TextLg,
  FontDesktopHeadingsHeadingXs: HeadingXs,
  FontDesktopHeadingsHeadingSm: HeadingSm,
  FontDesktopHeadingsHeadingMd: HeadingMd,
  FontDesktopHeadingsHeadingLg: HeadingLg,
  FontDesktopHeadingsHeadingXl: HeadingXl,
  FontDesktopHeadingsHeading2xl: Heading2xl,
  FontMobileHeadingsHeadingXs: MobileHeadingXs,
  FontMobileHeadingsHeadingSm: MobileHeadingSm,
  FontMobileHeadingsHeadingMd: MobileHeadingMd,
  FontMobileHeadingsHeadingLg: MobileHeadingLg,
  FontMobileHeadingsHeadingXl: MobileHeadingXl,
  FontMobileHeadingsHeading2xl: MobileHeading2xl,
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
        convertToRem(TextXs.fontSize),
        {
          lineHeight: convertToRem(TextXs.lineHeight),
          letterSpacing: convertToRem(TextXs.letterSpacing),
          fontWeight: TextXs.fontWeight,
          fontFamily: TextXs.fontFamily,
          fontStyle: TextXs.fontStyle,
          fontStretch: TextXs.fontStretch,
          textTransform: TextXs.textCase,
        },
      ],
      sm: [
        convertToRem(TextSm.fontSize),
        {
          lineHeight: convertToRem(TextSm.lineHeight),
          letterSpacing: convertToRem(TextSm.letterSpacing),
          fontWeight: TextSm.fontWeight,
          fontFamily: TextSm.fontFamily,
          fontStyle: TextSm.fontStyle,
          fontStretch: TextSm.fontStretch,
          textTransform: TextSm.textCase,
        },
      ],
      md: [
        convertToRem(TextMd.fontSize),
        {
          lineHeight: convertToRem(TextMd.lineHeight),
          letterSpacing: convertToRem(TextMd.letterSpacing),
          fontWeight: TextMd.fontWeight,
          fontFamily: TextMd.fontFamily,
          fontStyle: TextMd.fontStyle,
          fontStretch: TextMd.fontStretch,
          textTransform: TextMd.textCase,
        },
      ],
      base: [
        convertToRem(TextMd.fontSize),
        {
          lineHeight: convertToRem(TextMd.lineHeight),
          letterSpacing: convertToRem(TextMd.letterSpacing),
          fontWeight: TextMd.fontWeight,
          fontFamily: TextMd.fontFamily,
          fontStyle: TextMd.fontStyle,
          fontStretch: TextMd.fontStretch,
          textTransform: TextMd.textCase,
        },
      ],
      lg: [
        convertToRem(TextLg.fontSize),
        {
          lineHeight: convertToRem(TextLg.lineHeight),
          letterSpacing: convertToRem(TextLg.letterSpacing),
          fontWeight: TextLg.fontWeight,
          fontFamily: TextLg.fontFamily,
          fontStyle: TextLg.fontStyle,
          fontStretch: TextLg.fontStretch,
          textTransform: TextLg.textCase,
        },
      ],
    },
    headingSize: {
      xs: [
        convertToRem(HeadingXs.fontSize),
        {
          lineHeight: convertToRem(HeadingXs.lineHeight),
          letterSpacing: convertToRem(HeadingXs.letterSpacing),
          fontWeight: HeadingXs.fontWeight,
          fontStyle: HeadingXs.fontStyle,
          fontStretch: HeadingXs.fontStretch,
          textTransform: HeadingXs.textCase,
        },
      ],
      sm: [
        convertToRem(HeadingSm.fontSize),
        {
          lineHeight: convertToRem(HeadingSm.lineHeight),
          letterSpacing: convertToRem(HeadingSm.letterSpacing),
          fontWeight: HeadingSm.fontWeight,
          fontStyle: HeadingSm.fontStyle,
          fontStretch: HeadingSm.fontStretch,
          textTransform: HeadingSm.textCase,
        },
      ],
      md: [
        convertToRem(HeadingMd.fontSize),
        {
          lineHeight: convertToRem(HeadingMd.lineHeight),
          letterSpacing: convertToRem(HeadingMd.letterSpacing),
          fontWeight: HeadingMd.fontWeight,
          fontStyle: HeadingMd.fontStyle,
          fontStretch: HeadingMd.fontStretch,
          textTransform: HeadingMd.textCase,
        },
      ],
      lg: [
        convertToRem(HeadingLg.fontSize),
        {
          lineHeight: convertToRem(HeadingLg.lineHeight),
          letterSpacing: convertToRem(HeadingLg.letterSpacing),
          fontWeight: HeadingLg.fontWeight,
          fontStyle: HeadingLg.fontStyle,
          fontStretch: HeadingLg.fontStretch,
          textTransform: HeadingLg.textCase,
        },
      ],
      xl: [
        convertToRem(HeadingXl.fontSize),
        {
          lineHeight: convertToRem(HeadingXl.lineHeight),
          letterSpacing: convertToRem(HeadingXl.letterSpacing),
          fontWeight: HeadingXl.fontWeight,
          fontStyle: HeadingXl.fontStyle,
          fontStretch: HeadingXl.fontStretch,
          textTransform: HeadingXl.textCase,
        },
      ],
      '2xl': [
        convertToRem(Heading2xl.fontSize),
        {
          lineHeight: convertToRem(Heading2xl.lineHeight),
          letterSpacing: convertToRem(Heading2xl.letterSpacing),
          fontWeight: Heading2xl.fontWeight,
          fontStyle: Heading2xl.fontStyle,
          fontStretch: Heading2xl.fontStretch,
          textTransform: Heading2xl.textCase,
        },
      ],
    },
    mobileHeadingSize: {
      xs: [
        convertToRem(MobileHeadingXs.fontSize),
        {
          lineHeight: convertToRem(MobileHeadingXs.lineHeight),
          letterSpacing: convertToRem(MobileHeadingXs.letterSpacing),
          fontWeight: MobileHeadingXs.fontWeight,
          fontStyle: MobileHeadingXs.fontStyle,
          fontStretch: MobileHeadingXs.fontStretch,
          textTransform: MobileHeadingXs.textCase,
        },
      ],
      sm: [
        convertToRem(MobileHeadingSm.fontSize),
        {
          lineHeight: convertToRem(MobileHeadingSm.lineHeight),
          letterSpacing: convertToRem(MobileHeadingSm.letterSpacing),
          fontWeight: MobileHeadingSm.fontWeight,
          fontStyle: MobileHeadingSm.fontStyle,
          fontStretch: MobileHeadingSm.fontStretch,
          textTransform: MobileHeadingSm.textCase,
        },
      ],
      md: [
        convertToRem(MobileHeadingMd.fontSize),
        {
          lineHeight: convertToRem(MobileHeadingMd.lineHeight),
          letterSpacing: convertToRem(MobileHeadingMd.letterSpacing),
          fontWeight: MobileHeadingMd.fontWeight,
          fontStyle: MobileHeadingMd.fontStyle,
          fontStretch: MobileHeadingMd.fontStretch,
          textTransform: MobileHeadingMd.textCase,
        },
      ],
      lg: [
        convertToRem(MobileHeadingLg.fontSize),
        {
          lineHeight: convertToRem(MobileHeadingLg.lineHeight),
          letterSpacing: convertToRem(MobileHeadingLg.letterSpacing),
          fontWeight: MobileHeadingLg.fontWeight,
          fontStyle: MobileHeadingLg.fontStyle,
          fontStretch: MobileHeadingLg.fontStretch,
          textTransform: MobileHeadingLg.textCase,
        },
      ],
      xl: [
        convertToRem(MobileHeadingXl.fontSize),
        {
          lineHeight: convertToRem(MobileHeadingXl.lineHeight),
          letterSpacing: convertToRem(MobileHeadingXl.letterSpacing),
          fontWeight: MobileHeadingXl.fontWeight,
          fontStyle: MobileHeadingXl.fontStyle,
          fontStretch: MobileHeadingXl.fontStretch,
          textTransform: MobileHeadingXl.textCase,
        },
      ],
      '2xl': [
        convertToRem(MobileHeading2xl.fontSize),
        {
          lineHeight: convertToRem(MobileHeading2xl.lineHeight),
          letterSpacing: convertToRem(MobileHeading2xl.letterSpacing),
          fontWeight: MobileHeading2xl.fontWeight,
          fontStyle: MobileHeading2xl.fontStyle,
          fontStretch: MobileHeading2xl.fontStretch,
          textTransform: MobileHeading2xl.textCase,
        },
      ],
    },
    screens: {
      sm: `${tokens.BreakpointsSm}px`,
      md: `${tokens.BreakpointsMd}px`,
      lg: `${tokens.BreakpointsLg}px`,
      '2xl': `${tokens.Breakpoints2xl}px`,
    },
    colors: {
      primary: {
        DEFAULT: tokens.ColorPrimaryOrange500Base,
        base: tokens.ColorPrimaryOrange500Base,
        900: tokens.ColorPrimaryOrange900,
        700: tokens.ColorPrimaryOrange700,
        600: tokens.ColorPrimaryOrange600,
        500: tokens.ColorPrimaryOrange500Base,
        400: tokens.ColorPrimaryOrange400,
        150: tokens.ColorPrimaryOrange150,
        100: tokens.ColorPrimaryOrange100,
        50: tokens.ColorPrimaryOrange50,
        25: tokens.ColorPrimaryOrange25,
      },
      surface: {
        black: tokens.ColorSurfaceTextBlack,
        900: tokens.ColorSurfaceGrey900,
        800: tokens.ColorSurfaceGrey800,
        700: tokens.ColorSurfaceGrey700,
        600: tokens.ColorSurfaceGrey600,
        500: tokens.ColorSurfaceGrey500,
        400: tokens.ColorSurfaceGrey400,
        300: tokens.ColorSurfaceGrey300,
        200: tokens.ColorSurfaceGrey200,
        150: tokens.ColorSurfaceGrey150,
        100: tokens.ColorSurfaceGrey100,
        50: tokens.ColorSurfaceGrey50,
        white: tokens.ColorSurfaceWhite,
      },
      success: {
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
      },
      attention: {
        DEFAULT: tokens.ColorSystemAttention500,
      },
      sale: {
        DEFAULT: tokens.ColorSystemSale500,
      },
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {
      spacing: {
        xs: convertToRem(tokens.SizesXs),
        sm: convertToRem(tokens.SizesSm),
        'sm-alt': convertToRem(tokens.SizesSmAlt),
        md: convertToRem(tokens.SizesMd),
        'md-alt': convertToRem(tokens.SizesMdAlt),
        lg: convertToRem(tokens.SizesLg),
        xl: convertToRem(tokens.SizesXl),
        '2xl': convertToRem(tokens.Sizes2xl),
        '3xl': convertToRem(tokens.Sizes3xl),
        '4xl': convertToRem(tokens.Sizes4xl),
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

      matchUtilities(
        {
          'heading-mobile': (value) => ({
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
        { values: theme('mobileHeadingSize') }
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
    }),
  ],
}
