import { type ReactNode } from 'react'

interface ITabFamilyClasses {
  state: Record<string, string>
}

const tabFamilyClasses: ITabFamilyClasses = {
  state: {
    active: 'border-primary-500 bg-surface-white text-primary font-bold',
    default: 'border-surface-200 bg-surface-100',
  },
}

interface TabProps {
  children: ReactNode
  isActive: boolean
  id: string
  tabGroup: string
  label?: string
  handleClick?: () => void
}

const Tab = ({
  children,
  isActive,
  id,
  handleClick,
  tabGroup,
  label,
  ...props
}: TabProps) => (
  <button
    className={`w-1/2 cursor-pointer border py-sm text-center transition first:rounded-tl-lg last:rounded-tr-lg md:py-sm-alt ${
      tabFamilyClasses['state'][isActive ? 'active' : 'default']
    }`}
    onClick={handleClick}
    role='tab'
    id={`${tabGroup}-${id}`}
    {...(isActive && { 'aria-selected': true })}
    {...props}
  >
    {label && <span className='mr-xs hidden md:inline-block'>{label}</span>}
    {children}
  </button>
)

export default Tab
