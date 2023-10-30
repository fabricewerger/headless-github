import { type ElementType, type ReactNode } from 'react'

type TypographyProps<C extends ElementType> = {
  children: ReactNode
  as?: C
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'base'
  className?: string
  heading?: boolean
} & React.ComponentPropsWithoutRef<C>

interface ITypographyFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const typographyFamilyClasses: ITypographyFamilyClasses = {
  variant: {
    heading: {
      xs: 'heading-xs',
      sm: 'heading-sm',
      base: 'heading-md',
      md: 'heading-md',
      lg: 'heading-lg',
      xl: 'heading-xl',
      '2xl': 'heading-2xl',
      '3xl': 'heading-3xl',
    },
    text: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-md',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
  },
}

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5']

const Typography = <C extends ElementType = 'span'>({
  as,
  size = 'md',
  children,
  className,
  heading,
  ...props
}: TypographyProps<C>) => {
  const Element = as || 'span'

  const getState = () => {
    switch (true) {
      case heading || headingTags.includes(Element as string):
        return 'heading'
      default:
        return 'text'
    }
  }

  return (
    <Element
      className={`${typographyFamilyClasses['variant'][getState()][size]} ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Typography
