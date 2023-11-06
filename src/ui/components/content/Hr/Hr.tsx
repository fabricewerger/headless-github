import type { ComponentPropsWithRef } from 'react'

interface HrProps extends ComponentPropsWithRef<'hr'> {
  variant: 'primary' | 'surface'
}

interface IHrFamilyClasses {
  variant: Record<'primary' | 'surface', string>
}

const hrFamilyClasses: IHrFamilyClasses = {
  variant: {
    primary: 'bg-primary',
    surface: 'bg-surface-500',
  },
}

const Hr = ({ variant = 'primary', className = '', ...props }: HrProps) => {
  return (
    <hr
      className={`h-0.5 border-none ${hrFamilyClasses['variant'][variant]} ${className}`}
      {...props}
    />
  )
}

export default Hr
