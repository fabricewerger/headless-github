import type { ComponentPropsWithRef, ReactElement } from 'react'
import React from 'react'

import Link from '@/ui/components/navigation/Link'
import Loading from '@/ui/components/utility/Loading'
import Typography from '@/ui/components/content/Typography'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'surface'
  disabled?: boolean
  submitting?: boolean
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
  iconPosition?: 'trailing' | 'leading'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

interface IButtonFamilyClasses {
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
  loadingIcon: Record<string, 'primary' | 'neutral'>
  size: Record<string, Record<string, string>>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  variant: {
    primary: {
      base: 'bg-surface-white text-primary-base border-surface-white hover:border-primary-base hover:bg-primary-base active:bg-primary-700 active:border-primary-700 active:shadow-inner-md-pressed active:text-surface-white focus:text-primary-base focus:border focus:border-info-500 hover:text-surface-white active:text-surface-white',
      disabled: 'text-surface-300 bg-surface-100 border-surface-100',
      loadingIcon: 'white',
    },
    secondary: {
      base: 'bg-surface-white text-surface border-surface-100  hover:bg-surface-50 hover:border-surface-300 active:bg-surface-50 active:shadow-inner-md-pressed active:border-surface-100',
      disabled: 'text-surface-300 bg-surface-100 border-surface-100',
      loadingIcon: 'neutral',
    },
    surface: {
      base: 'bg-surface-black border-surface-white text-surface-white hover:bg-surface-800 active:bg-surface-800 focus:text-surface-black active:text-surface-white active:border-surface-800',
      disabled: 'text-surface-300 bg-surface-100 border-surface-100',
      loadingIcon: 'neutral',
    },
  },
  iconPosition: {
    leading: '[&>*:first-child]:order-first',
    trailing: '[&>*:first-child]:order-last',
  },
  loadingIcon: {
    primary: 'primary',
    secondary: 'primary',
    surface: 'primary',
  },
  size: {
    xs: {
      base: 'text-xs px-sm py-xs',
      iconOnly: 'p-xs',
    },
    sm: {
      base: 'text-sm px-sm py-sm',
      iconOnly: 'p-sm',
    },
    md: {
      base: 'text-md px-md py-sm',
      iconOnly: 'p-sm',
    },
    lg: {
      base: 'text-lg px-xl py-md',
      iconOnly: 'p-md',
    },
    xl: {
      base: 'text-xl px-2xl py-lg',
      iconOnly: 'p-xl',
    },
  },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      disabled,
      submitting,
      href,
      target,
      type = 'button',
      icon,
      iconPosition = 'leading',
      size = 'md',
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
          className={`relative inline-flex items-center border justify-center rounded-full font-bold transition-colors leading-none focus:bg-surface-white focus:border-info-500 focus:outline focus:outline-info-500/50 focus:outline-xs focus:shadow-none active:outline-none ${
            buttonFamilyClasses['size'][size][children ? 'base' : 'iconOnly']
          } ${
            buttonFamilyClasses['variant'][variant][getState()]
          } ${className}`}
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
                    ? 'primary'
                    : buttonFamilyClasses['loadingIcon'][variant]
                }
                size='sm'
              />
            </span>
          )}
          <span
            className={`${
              submitting ? 'opacity-0' : 'opacity-100'
            } z-10 inline-flex items-center justify-center ${
              size === 'xs' ? 'gap-md' : 'gap-sm'
            } ${buttonFamilyClasses['iconPosition'][iconPosition]}`}
          >
            {icon && <span>{icon}</span>}
            {children}
          </span>
        </ConditionalButton>
      </Link>
    )
  }
)

Button.displayName = 'Button'

export default Button
