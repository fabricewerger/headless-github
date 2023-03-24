import { type ComponentPropsWithoutRef } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'textarea'> {
  id: string
  hint?: string
  disabled?: boolean
  error?: boolean
  success?: boolean
}

interface ITextAreaFamilyClasses {
  state: Record<string, Record<string, string>>
}

const textAreaFamilyClasses: ITextAreaFamilyClasses = {
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
}

const TextArea = ({
  id,
  disabled,
  hint,
  error,
  success,
  ...props
}: InputProps) => {
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
    <div className='relative'>
      <textarea
        className={`background-white z-1 relative block w-full rounded-sm border border-2 p-sm text-md transition-colors ${
          textAreaFamilyClasses['state'][getState()]['input']
        }`}
        id={id}
        disabled={disabled}
        {...props}
        {...(hint && { 'aria-labelledby': `${id}-hint` })}
      />
    </div>
  )
}

export default TextArea
