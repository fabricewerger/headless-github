import Link, { type LinkProps as ILink } from 'next/link'
import { type ReactNode } from 'react'

interface IconProps extends ILink {
  variant?: 'primary' | 'surface'
  size?: 'lg' | 'md' | 'sm'
  children: ReactNode
  className?: string
}

interface IIconFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const iconFamilyClasses: IIconFamilyClasses = {
  size: {
    sm: 'w-md h-md',
    md: 'w-lg h-lg',
    lg: 'w-xl h-xl',
  },
  variant: {
    primary:
      'bg-surface-white border-none text-primary hover:outline-surface-500/20 focus:bg-primary',
    surface:
      'bg-surface-white border-surface-200 hover:outline-surface-500/20 focus:bg-surface-500/10 focus:border-surface-300',
  },
}

const Icon = ({
  variant = 'primary',
  href,
  size = 'md',
  children,
  className = '',
}: IconProps) => {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full border [&>svg]:h-[60%] [&>svg]:w-[60%] flex items-center justify-center hover:outline hover:outline-xs focus:outline-xs focus:text-surface-white ${iconFamilyClasses['size'][size]} ${iconFamilyClasses['variant'][variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

export default Icon
