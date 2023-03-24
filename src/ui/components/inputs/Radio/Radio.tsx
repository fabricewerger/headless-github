import type { ComponentPropsWithoutRef } from 'react'

interface RadioProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> {
  // eslint-disable-next-line no-unused-vars
  onChange: (checked: boolean) => void
  checked: boolean
}

const Radio = ({ checked, onChange, ...props }: RadioProps) => {
  return (
    <input
      type='radio'
      checked={checked}
      onChange={() => onChange(true)}
      className='grid h-[18px] w-[18px] cursor-pointer appearance-none place-content-center rounded-full border border-2 border-surface-300 bg-surface-white transition-colors before:h-[8px] before:w-[8px] before:scale-0 before:rounded-full before:shadow-[inset_1em_1em_#FFFFFF] before:duration-200 before:ease-in-out before:content-[""] checked:border-primary-base checked:bg-primary-base checked:before:scale-100 hover:bg-primary-100 checked:hover:bg-primary-base'
      {...props}
    />
  )
}

export default Radio
