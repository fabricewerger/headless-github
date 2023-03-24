import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@heroicons/react/24/outline'

export interface CheckboxComponentProps
  extends Omit<CheckboxProps, 'onChange'> {
  id: string
  checked?: boolean | 'indeterminate'
  disabled?: boolean
  error?: boolean
  size?: 'lg' | 'md'
  className?: string
  value: string
  name: string
  swatch?: string
  overrideClasses?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void
}

interface ICheckboxFamilyClasses {
  state: Record<string, string>
  size: Record<string, string>
}

const checkboxFamilyClasses: ICheckboxFamilyClasses = {
  state: {
    swatch: '!hover:outline-[0px]',
    disabled: 'bg-surface-100 border-surface-200',
    error:
      'bg-surface-white border-error-500 data-[state="unchecked"]:hover:outline data-[state="unchecked"]:hover:bg-error-500 data-[state="unchecked"]:hover:outline-surface-white data-[state="checked"]:bg-error-500 data-[state="checked"]:border-error-500',
    active:
      'bg-surface-white border-surface-200 hover:outline hover:bg-primary-500 hover:bg-opacity-50 hover:outline-surface-white data-[state="checked"]:bg-primary data-[state="checked"]:border-primary data-[state="checked"]:outline-none',
  },
  size: {
    lg: 'h-lg w-lg hover:outline-[5px] outline-offset-[-7px] [&_svg]:w-5 [&_svg]:h-5',
    md: 'h-[18px] w-[18px] hover:outline-[3px] outline-offset-[-5px] [&_svg]:w-3 [&_svg]:h-3',
  },
}

const Checkbox = ({
  id,
  checked = false,
  disabled,
  error = false,
  size = 'md',
  className,
  name,
  value,
  overrideClasses = false,
  onChange,
  ...props
}: CheckboxComponentProps) => {
  const getState = () => {
    if (overrideClasses) return 'swatch'

    if (disabled) return 'disabled'

    if (error) return 'error'

    return 'active'
  }

  return (
    <div className={`inline-flex items-center`}>
      <RadixCheckbox.Root
        className={`flex items-center rounded border-2 text-surface-white transition-colors ${
          checkboxFamilyClasses['size'][size]
        } ${checkboxFamilyClasses['state'][getState()]}  ${className || ''}`}
        defaultChecked={checked}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onCheckedChange={onChange}
        {...props}
      >
        <RadixCheckbox.Indicator>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  )
}

export default Checkbox
