import {
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import {
  useState,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from 'react'

import FormControl from '@/ui/components/inputs/FormControl'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  id: string
  label?: string
  type: 'text' | 'email' | 'password' | 'search' | 'number'
  disabled?: boolean
  hint?: string
  error?: boolean
  success?: boolean
}

interface IInputFamilyClasses {
  state: Record<string, Record<string, string>>
  icon: Record<string, ReactElement>
  // eslint-disable-next-line no-unused-vars
  passwordIcon: (showPassword: boolean) => ReactElement
}

const inputFamilyClasses: IInputFamilyClasses = {
  state: {
    disabled: {
      input:
        'bg-surface-200 border-surface-200 text-surface-600 placeholder:text-surface-600',
    },
    error: {
      input:
        'bg-white border-error-500 outline outline-4 outline-error-50 placeholder:text-surface-500',
    },
    success: {
      input:
        'bg-white border-success-500 outline outline-4 outline-success-50 placeholder:text-surface-500',
    },
    default: {
      input:
        'bg-white border-surface-200 focus:outline focus:outline-4 focus:outline-info-50 focus:border-info-500 text-surface-black placeholder:text-surface-500',
    },
  },
  icon: {
    error: <XMarkIcon className='h-5 w-5 [&>path]:fill-error-500' />,
    success: <CheckIcon className='h-5 w-5 [&>path]:fill-success-500' />,
    password: (
      <EyeSlashIcon className='h-5 w-5 cursor-pointer [&>path]:fill-surface-300' />
    ),
    passwordVisible: (
      <EyeIcon className='h-5 w-5 cursor-pointer [&>path]:fill-surface-300' />
    ),
    search: <CheckIcon className='h-5 w-5 [&>path]:fill-primary-500' />,
  },
  passwordIcon: (showPassword: boolean) => {
    return showPassword
      ? inputFamilyClasses.icon.passwordVisible
      : inputFamilyClasses.icon.password
  },
}

const Input = ({
  id,
  type = 'text',
  disabled,
  label,
  required,
  hint,
  error,
  success,
  value,
  ...props
}: InputProps) => {
  const showIcon =
    (Boolean(error || success) && !disabled) ||
    type === 'password' ||
    type === 'search'
  const [viewPassword, setViewPassword] = useState<boolean>(false)

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
    <FormControl
      id={id}
      required={required}
      label={label}
      hint={hint}
      disabled={disabled}
      error={error}
      success={success}
    >
      <div className='relative'>
        <input
          className={`z-1 w-full rounded-sm border py-sm px-sm text-md transition-colors ${
            inputFamilyClasses['state'][getState()]['input']
          }
                    ${
                      type === 'number'
                        ? '!caret-primary-500'
                        : '!caret-info-500'
                    } `}
          type={viewPassword ? 'text' : type}
          id={id}
          name={id}
          disabled={disabled}
          value={value}
          {...props}
          {...(hint && { 'aria-labelledby': `${id}-hint` })}
        />
        {showIcon && (
          <span
            className='absolute top-1/2 right-0 block -translate-y-1/2 -translate-x-1/2'
            onClick={() => setViewPassword(!viewPassword)}
          >
            {type === 'password'
              ? inputFamilyClasses.passwordIcon(viewPassword)
              : inputFamilyClasses['icon'][getState()]}
            {type === 'search' && inputFamilyClasses['icon'][getState()]}
          </span>
        )}
      </div>
    </FormControl>
  )
}

export default Input
