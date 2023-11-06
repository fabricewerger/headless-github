import NextLink from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  disabled?: boolean
}

const linkDefaultClassNames =
  'cursor-pointer hover:decoration-solid hover:underline hover:underline-offset-4 decoration-surface-500/30'

const Link = ({
  disabled,
  href,
  target,
  children,
  onClick,
  className: classNameProp = '',
  ...props
}: LinkProps) => {
  const linkClassName = `${linkDefaultClassNames} ${classNameProp}`

  if (href && !disabled) {
    // External link
    if (target) {
      return (
        <a
          href={href}
          target={target}
          rel='nofollow'
          className={linkClassName}
          {...props}
        >
          {children}
        </a>
      )
    }

    //Internal link
    return (
      <NextLink href={href} className={linkClassName} {...props}>
        {children}
      </NextLink>
    )
  }

  if (onClick && !disabled)
    return (
      <span
        {...(onClick && { onClick: onClick })}
        className={linkClassName}
        {...props}
      >
        {children}
      </span>
    )

  return <span className={linkClassName}>{children}</span>
}

export default Link
