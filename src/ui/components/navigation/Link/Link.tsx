import NextLink, { type LinkProps as INextLink } from 'next/link'

interface LinkProps extends INextLink {
  children: string
}

const Link = ({ href, children, ...props }: LinkProps) => {
  return (
    <NextLink
      href={href}
      {...props}
      className='group relative inline-block text-surface hover:no-underline focus:text-surface-300 hover:text-surface-300 transition-color active:text-primary-500'
    >
      {children}
      <span className='w-0 h-[1px] bg-surface-200 block group-hover:w-full  transition-all absolute bottom-0 translate-y-[2px] duration-300 group-active:bg-primary-500' />
    </NextLink>
  )
}

export default Link
