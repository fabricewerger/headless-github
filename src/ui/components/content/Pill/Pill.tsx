import type { ReactElement } from 'react'

interface PillProps {
  children: string
  variant?: 'primary' | 'surface'
  icon?: ReactElement
  onClick?: () => void
}

interface IPillFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const pillFamilyClasses: IPillFamilyClasses = {
  variant: {
    primary: {
      base: 'bg-primary text-surface-white before:border-primary before:hover:border-xs before:hover:border-primary before:focus:border-sm before:focus:border-primary',
    },
    surface: {
      base: 'bg-surface-50 text-surface-900 before:border-surface-300 before:hover:border-xs before:focus:border-xs before:focus:border-info-500',
    },
  },
}

const Pill = ({ children, variant = 'surface', icon, onClick }: PillProps) => {
  return (
    <div
      className={`before:border-1 relative inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full p-sm text-xs font-bold outline-none transition-colors before:absolute before:top-[0px] before:right-[0px] before:bottom-[0px] before:left-[0px] before:rounded-full before:border ${pillFamilyClasses['variant'][variant]['base']}`}
      onClick={onClick}
    >
      <span className='inline-flex items-center justify-center [&>*+span]:ml-1 [&>*:first-child]:order-first'>
        {icon && <span>{icon}</span>}
        {children && <span>{children}</span>}
      </span>
    </div>
  )
}

export default Pill
