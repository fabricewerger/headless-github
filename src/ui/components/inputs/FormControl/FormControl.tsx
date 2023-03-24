import type { ReactNode } from 'react'

interface FormControlProps {
  label?: string
  id: string
  disabled?: boolean
  required?: boolean
  hint?: string
  error?: boolean
  success?: boolean
  children: ReactNode
}

interface IFormInputFamilyClasses {
  state: Record<string, Record<string, string>>
}

const formInputFamilyClasses: IFormInputFamilyClasses = {
  state: {
    disabled: {
      hint: 'text-surface-300',
    },
    error: {
      hint: 'text-error-500',
    },
    success: {
      hint: 'text-surface-600',
    },
    default: {
      hint: 'text-surface-600',
    },
  },
}

const FormControl = ({
  label,
  required,
  disabled,
  id,
  children,
  error,
  success,
  hint,
}: FormControlProps) => {
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

  return label ? (
    <div className='grid gap-sm'>
      {label && (
        <label className='display-block text-sm font-bold' htmlFor={id}>
          {label}
          {required && !disabled && (
            <span className='relative top-xs ml-1 h-2 text-md leading-3 text-primary'>
              *
            </span>
          )}
        </label>
      )}
      <div>{children}</div>
      {hint && (
        <div
          className={`text-sm ${
            formInputFamilyClasses['state'][getState()]['hint']
          }`}
        >
          {hint}
        </div>
      )}
    </div>
  ) : (
    <>{children}</>
  )
}

export default FormControl
