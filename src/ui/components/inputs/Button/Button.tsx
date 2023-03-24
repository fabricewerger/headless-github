import type { ComponentPropsWithRef, ReactElement } from 'react'
import React from 'react'

import Link from '@/ui/components/navigation/Link'
import Loading from '@/ui/components/utility/Loading'
import Typography from '@/ui/components/content/Typography'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'breadcrumb'
  disabled?: boolean
  submitting?: boolean
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  size?: 'xs' | 'sm' | 'lg'
}

interface IButtonFamilyClasses {
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
  loadingIcon: Record<string, 'primary' | 'white' | 'neutral'>
  size: Record<string, string>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  variant: {
    primary: {
      base: 'bg-primary-base text-surface-white before:border-primary hover:bg-primary-700 before:hover:border-primary-700 before:focus:border-4 before:focus:bg-primary focus:text-surface-white before:focus:border-primary-150',
      disabled: 'bg-surface-200 text-surface-400 before:border-surface-200',
      loadingIcon: 'white',
    },
    secondary: {
      base: 'bg-surface-white text-primary-base before:border-2 before:border-primary-base before:hover:border-4 before:hover:border-primary-base before:focus:border-4 before:focus:border-primary-150',
      disabled: 'text-surface-400 before:border-surface-200',
      loadingIcon: 'primary',
    },
    tertiary: {
      base: 'bg-surface-white text-surface-black before:border-2 before:border-surface-black before:hover:border-4 before:hover:border-surface-black before:focus:border-4 before:focus:border-info-500',
      disabled: 'text-surface-400 before:border-surface-200',
      loadingIcon: 'neutral',
    },
    breadcrumb: {
      base: 'bg-surface-white text-primary-600 before:border-2 before:border-primary-600 before:hover:border-4 before:hover:border-primary-600 before:focus:border-4 before:focus:border-primary-150',
      disabled: 'text-surface-400 before:border-surface-200',
      loadingIcon: 'primary',
    },
  },
  iconPosition: {
    left: '[&>*:first-child]:order-first',
    right: '[&>*:first-child]:order-last',
  },
  loadingIcon: {
    primary: 'white',
    secondary: 'primary',
    tertiary: 'neutral',
  },
  size: {
    xs: 'text-xs py-xs',
    sm: 'text-sm p-sm',
    lg: 'text-md p-2.5',
  },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      disabled,
      submitting,
      href,
      target,
      type = 'button',
      icon,
      iconPosition = 'right',
      size = 'lg',
      ...props
    },
    forwardedRef
  ) => {
    const getState = () => {
      if (disabled) return 'disabled'

      return 'base'
    }

    const ConditionalButton = ({ children, ...props }: any) => {
      /* Prevent <a /> tag from wrapping button */
      if (href)
        return (
          <span {...props} role='button'>
            {children}
          </span>
        )

      return <button {...props}>{children}</button>
    }

    return (
      <Link href={href} target={target} disabled={disabled}>
        <ConditionalButton
          className={`${className} before:border-1 relative inline-flex items-center justify-center rounded text-base font-bold outline-none transition-colors before:absolute before:top-[0px] before:right-[0px] before:bottom-[0px] before:left-[0px] before:rounded before:border ${
            buttonFamilyClasses['size'][size]
          } ${buttonFamilyClasses['variant'][variant][getState()]}`}
          disabled={disabled}
          type={type}
          ref={forwardedRef}
          {...props}
        >
          {submitting && (
            <span className='absolute left-1/2 top-1/2 ml-0 -translate-x-1/2 -translate-y-1/2'>
              <Loading
                variant={
                  disabled
                    ? 'white'
                    : buttonFamilyClasses['loadingIcon'][variant]
                }
                size='md'
              />
            </span>
          )}
          <span
            className={`${
              submitting ? 'opacity-0' : 'opacity-100'
            } z-10 inline-flex items-center justify-center ${
              size === 'xs' ? 'gap-0' : 'gap-xs'
            } ${buttonFamilyClasses['iconPosition'][iconPosition]} ${
              children ? 'px-sm' : 'px-0'
            }`}
          >
            {icon && <span>{icon}</span>}
            {children && (
              <Typography className='font-bold' size={'lg'}>
                {children}
              </Typography>
            )}
          </span>
        </ConditionalButton>
      </Link>
    )
  }
)

Button.displayName = 'Button'

export default Button
