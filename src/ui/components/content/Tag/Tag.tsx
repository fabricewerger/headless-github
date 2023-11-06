import type { ReactElement, ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  size?: 'md' | 'sm'
  variant?: 'error' | 'info' | 'attention' | 'surface'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  className?: string
}

interface ITagFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
}

const tagFamilyClasses: ITagFamilyClasses = {
  size: {
    sm: 'text-xs px-sm py-xs',
    md: 'text-base font-bold px-md py-xs',
  },
  variant: {
    error: {
      base: 'bg-error-500 text-surface-white',
    },
    info: {
      base: 'bg-info-500 text-surface-white',
    },
    attention: {
      base: 'bg-attention text-surface-black border border-1 border-attention',
    },
    surface: {
      base: 'font-bold bg-surface-50 text-surface-black border border-surface-200 ',
    },
  },
  iconPosition: {
    left: '[&>*:first-child]:order-first',
    right: '[&>*:first-child]:order-last',
  },
}

const Tag = ({
  children,
  size = 'md',
  variant = 'error',
  icon,
  iconPosition = 'left',
  className,
}: TagProps) => {
  return (
    <div className={className}>
      <div
        className={`relative inline-flex items-center justify-center rounded-sm transition-colors ${tagFamilyClasses['size'][size]} ${tagFamilyClasses['variant'][variant]['base']}`}
      >
        <span
          className={`inline-flex items-center justify-center gap-xs ${tagFamilyClasses['iconPosition'][iconPosition]}`}
        >
          {icon && <span>{icon}</span>}
          {children && <span>{children}</span>}
        </span>
      </div>
    </div>
  )
}

export default Tag
