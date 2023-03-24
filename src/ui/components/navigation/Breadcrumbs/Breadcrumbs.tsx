import { ChevronRightIcon } from '@heroicons/react/24/solid'

import Button from '@/ui/components/inputs/Button/'
import Link from '@/ui/components/navigation/Link/'
import Typography from '@/ui/components/content/Typography'

export interface ILink {
  id: string
  label: string
  href: string
}

interface BreadcrumbsProps {
  breadcrumbs: Array<ILink>
  currentUrl?: string
}

const Breadcrumbs = ({ breadcrumbs, currentUrl }: BreadcrumbsProps) => {
  /* Get second from last breadcrumb as parent category */
  const [parentCategory] = breadcrumbs.slice(-2)

  return (
    <div className='flex items-center gap-md'>
      <Button />
      <nav
        className='inline hidden leading-[100%] text-surface-black md:block [&_a:hover]:underline'
        aria-label='breadcrumbs'
      >
        <ol>
          <Typography as='li' size='xs' className='inline'>
            <Link href='/'>Home</Link>
          </Typography>
          {breadcrumbs?.map(({ id, label, href }) => (
            <Typography as='li' size='xs' className='inline-block' key={id}>
              <span
                className='mx-sm inline-block text-surface-300'
                aria-hidden='true'
              >
                <ChevronRightIcon className='inline h-3 w-3' />
              </span>
              <Link
                href={href}
                {...(currentUrl === href && {
                  'aria-current': 'location',
                })}
              >
                {label}
              </Link>
            </Typography>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumbs
