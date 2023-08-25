'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

import { ChevronRightIcon, HomeIcon } from '@/icons/index'
import Typography from '../../content/Typography/Typography'

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  const childrenAsArray = Array.isArray(children)
    ? children.filter(Boolean)
    : [children].filter(Boolean)

  return (
    <nav aria-label='breadcrumbs'>
      <ol className='inline flex gap-xs leading-[100%] items-center'>
        <Typography as='li' size='sm' className='flex items-center gap-xs'>
          <Link href='/'>
            <HomeIcon className='w-4 h-4' />
          </Link>
          <span aria-hidden='true'>
            <ChevronRightIcon className='w-3 h-3' />
          </span>
        </Typography>
        {childrenAsArray.map((breadcrumb, index) => (
          <Typography
            as='li'
            size='sm'
            key={index}
            className='flex items-center gap-xs'
          >
            {breadcrumb}
            {index + 1 < childrenAsArray.length && (
              <span aria-hidden='true'>
                <ChevronRightIcon className='w-3 h-3' />
              </span>
            )}
          </Typography>
        ))}
      </ol>
    </nav>
  )
}

const BreadcrumbsItem = ({
  children,
  href,
  ...props
}: BreadcrumbsItemProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      {...(pathname === href && {
        'aria-current': 'location',
      })}
      {...props}
      className='aria-[current=location]:text-surface-500'
    >
      {children}
    </Link>
  )
}

interface BreadcrumbsProps {
  children: ReactNode
}

interface BreadcrumbsItemProps extends LinkProps {
  children: ReactNode
}

Breadcrumbs.Item = BreadcrumbsItem

export default Breadcrumbs
