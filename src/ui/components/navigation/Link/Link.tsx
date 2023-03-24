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
        <a href={href} target={target} rel='nofollow' {...props}>
          {children}
        </a>
      )
    }

    //Internal link
    return (
      <Link href={href} {...props}>
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
