import Link from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  disabled?: boolean
}

const StyledLink = ({
  disabled,
  href,
  target,
  children,
  onClick,
  ...props
}: LinkProps) => {
  if (href && !disabled) {
    // External link
    if (target) {
      return (
        <a
          className='focus:text-primary text-surface-600 focus:text-surface-900 hover:text-surface-900 hover:underline transition'
          href={href}
          target={target}
          rel='nofollow'
          aria-roledescription='link'
          {...props}
        >
          {children}
        </a>
      )
    }

    //Internal link
    return (
      <Link
        className='focus:text-primary text-surface-600 focus:text-surface-900 hover:text-surface-900 hover:underline transition'
        href={href}
        aria-roledescription='link'
        {...props}
      >
        {children}
      </Link>
    )
  }

  if (onClick && !disabled)
    return (
      <span
        {...(onClick && { onClick: onClick, className: 'cursor-pointer' })}
        {...props}
      >
        {children}
      </span>
    )

  return <>{children}</>
}

export default StyledLink
