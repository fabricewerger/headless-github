import Link, { type LinkProps as ILink } from 'next/link'
import { type ReactNode } from 'react'

interface IconProps extends ILink {
  size?: 'lg' | 'md' | 'sm'
  children: ReactNode
  className?: string
}

interface IIconFamilyClasses {
  size: Record<string, string>
}

const iconFamilyClasses: IIconFamilyClasses = {
  size: {
    md: 'w-6 h-6',
    lg: 'w-12 h-12',
  },
}

const Icon = ({ href, size = 'md', children, className }: IconProps) => {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full border border-surface-200 transition-colors [&>svg]:h-[60%] [&>svg]:w-[60%] flex items-center justify-center ${
        iconFamilyClasses['size'][size]
      } hover:outline hover:outline-3 hover:outline-primary-200 focus:bg-primary-100 transition-all focus:outline-none focus:border-primary focus:text-surface-white ${
        className || ''
      }`}
    >
      {children}
    </Link>
  )
}

export default Icon
