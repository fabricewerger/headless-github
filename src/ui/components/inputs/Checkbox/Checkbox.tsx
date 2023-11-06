import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@heroicons/react/24/outline'

export interface CheckboxComponentProps
  extends Omit<CheckboxProps, 'onChange'> {
  checked?: boolean | 'indeterminate'
  disabled?: boolean
  error?: boolean
  size?: 'lg' | 'md'
  className?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void
}

interface ICheckboxFamilyClasses {
  state: Record<string, string>
  size: Record<string, string>
}

const checkboxFamilyClasses: ICheckboxFamilyClasses = {
  state: {
    disabled: 'bg-surface-50 border-surface-100 text-surface-200',
    error:
      'bg-surface-white border-error-500 outline text-surface-white outline-error-500/20 data-[state="checked"]:bg-error-500 data-[state="checked"]:border-error-500',
    active:
      'bg-surface-white border-surface-100 text-surface-white hover:outline hover:outline-xs hover:outline-surface-50 data-[state="checked"]:border-primary-300 data-[state="checked"]:text-primary-500',
  },
  size: {
    lg: 'h-lg w-lg hover:outline-xs [&_svg]:w-5 [&_svg]:h-5',
    md: 'h-md w-md hover:outline-xs [&_svg]:w-3 [&_svg]:h-3',
  },
}

const Checkbox = ({
  checked = false,
  disabled,
  error = false,
  size = 'md',
  className = '',
  onChange,
  ...props
}: CheckboxComponentProps) => {
  const getState = () => {
    if (disabled) return 'disabled'

    if (error) return 'error'

    return 'active'
  }

  return (
    <div className={`inline-flex items-center`}>
      <RadixCheckbox.Root
        {...props}
        className={`flex justify-center rounded-xs items-center border border-xs transition-colors ${
          checkboxFamilyClasses['size'][size]
        } ${checkboxFamilyClasses['state'][getState()]} ${className}`}
        disabled={disabled}
        checked={checked}
        onCheckedChange={onChange}
      >
        <RadixCheckbox.Indicator>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  )
}

export default Checkbox
