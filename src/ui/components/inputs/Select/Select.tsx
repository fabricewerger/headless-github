import * as RadixSelect from '@radix-ui/react-select'
import { SelectProps } from '@radix-ui/react-select'
import { type ReactNode, forwardRef } from 'react'

import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@/icons/index'

interface SelectComponentProps extends SelectProps {
  id: string
  label?: string
  hint?: string
  title?: string
  children: ReactNode
  placeholder?: string
  triggerText?: string
  value?: string
  error?: boolean
  success?: boolean
}

interface IInputFamilyClasses {
  state: Record<string, Record<string, string>>
}

const inputFamilyClasses: IInputFamilyClasses = {
  state: {
    disabled: {
      input:
        'bg-surface-50 border-surface-100 data-[placeholder]:text-surface-300',
    },
    error: {
      input:
        'bg-white border-error-500 outline outline-xs outline-error-50 data-[placeholder]:text-surface-500',
    },
    success: {
      input:
        'bg-white border-success-500 outline outline-xs outline-success-50 data-[placeholder]:text-surface-500',
    },
    default: {
      input:
        'bg-white border-surface-200 focus:outline focus:outline-xs focus:outline-info-50 focus:border-info-500 data-[placeholder]:text-surface-500 text-surface-black',
    },
  },
}

const Select = ({
  id,
  label,
  children,
  required,
  disabled,
  error,
  success,
  hint,
  value,
  triggerText,
  placeholder,
  title,
  ...props
}: SelectComponentProps) => {
  const getState = () => {
    switch (true) {
      case disabled:
        return 'disabled'
      case error:
        return 'error'
      case success:
        return 'success'
      default:
        return 'default'
    }
  }

  return (
    <RadixSelect.Root
      name={id}
      required={required}
      disabled={disabled}
      {...props}
    >
      <RadixSelect.Trigger
        className={`inline-flex items-center justify-between rounded-xs border px-md py-sm text-md transition-colors data-[state="open"]:border-opacity-0 ${
          inputFamilyClasses['state'][getState()]['input']
        }`}
        title={label || title}
      >
        <RadixSelect.Value>
          {triggerText ? (
            <span className='mr-sm text-surface-500'>
              {triggerText}
              <span
                className={`ml-xs ${
                  disabled ? 'text-surface-300' : 'text-surface-black'
                }`}
              >
                {value || placeholder}
              </span>
            </span>
          ) : (
            value ||
            (placeholder && (
              <span className='mr-sm text-surface-500'>{placeholder}</span>
            ))
          )}
        </RadixSelect.Value>
        <RadixSelect.Icon
          className={`pointer-events-none ml-sm flex w-md h-md cursor-default items-center justify-center ${
            disabled ? 'text-surface-300' : 'text-surface-black'
          }`}
        >
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          align='center'
          className='w-full animate-fadein overflow-hidden rounded bg-surface-white shadow-lg'
        >
          <RadixSelect.ScrollUpButton className='flex h-6 cursor-default items-center justify-center'>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className='flex h-6 cursor-default items-center justify-center'>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

interface SelectOptionProps {
  children: ReactNode
  value: string
}

const SelectOption = forwardRef<HTMLDivElement, SelectOptionProps>(
  ({ value, children, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        value={value}
        {...props}
        ref={forwardedRef}
        className='data-[highlighted]:bg-primary-200 data-[highlighted]:text-surface-base relative flex w-full select-none justify-between rounded-sm px-[12px] py-sm text-md text-surface-black hover:bg-surface-50 data-[disabled]:pointer-events-none data-[disabled]:text-surface-400 data-[highlighted]:outline-none'
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className='mr-sm'>
          <CheckIcon className='h-4 w-4' />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    )
  }
)

SelectOption.displayName = 'SelectOption'

export { SelectOption }

export default Select
