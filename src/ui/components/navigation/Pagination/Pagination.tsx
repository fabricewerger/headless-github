import { useMemo } from 'react'

import generatePageNumbers from '@/lib/utils/pagination'
import Link from '@/ui/components/navigation/Link/'
import { ChevronLeftIcon, ChevronRightIcon } from '@/icons/index'

interface PaginationProps {
  totalPages: number
  currentPage?: number
  pageNumbersToShow?: number
  // eslint-disable-next-line no-unused-vars
  onChange?: (pageNumber: number) => void
}

const Pagination = ({
  totalPages,
  currentPage = 1,
  pageNumbersToShow = 3,
  onChange,
}: PaginationProps) => {
  const handleClick = (currentPage: number) => {
    onChange && onChange(currentPage)
  }

  const pageNumbers = useMemo(
    () =>
      generatePageNumbers({
        totalPages,
        currentPage,
        pageNumbersToShow,
      }),
    [totalPages, currentPage, pageNumbersToShow]
  )

  return (
    <nav
      role='navigation'
      aria-label='Pagination'
      className='flex flex-wrap justify-between'
    >
      <span
        className={`mr-sm flex items-center justify-center ${
          currentPage === 1 ? 'text-surface-200' : ''
        }`}
      >
        <ChevronLeftIcon className='h-4 w-4 mr-xs' />
        <Link
          {...(currentPage > 1 && {
            onClick: () => handleClick(currentPage - 1),
          })}
          disabled={currentPage === 1}
        >
          Back
        </Link>
      </span>
      <ul className='flex flex-wrap [&_span]:block [&_span]:flex [&_span]:h-8 [&_span]:w-8 [&_span]:items-center [&_span]:justify-center leading-[2rem]'>
        {pageNumbers.map((pageNumber) =>
          pageNumber === '...' ? (
            <li key={pageNumber} className='h-8 w-8 text-center'>
              {pageNumber}
            </li>
          ) : (
            <li
              key={pageNumber}
              className={`cursor-pointer transition-colors hover:bg-primary hover:underline hover:text-surface-white underline-offset-2 ${
                pageNumber === currentPage
                  ? 'bg-primary text-surface-white'
                  : ''
              }`}
            >
              <Link
                {...(typeof pageNumber !== 'string' && {
                  onClick: () => handleClick(pageNumber),
                })}
                aria-label={
                  pageNumber === currentPage
                    ? `Current page, page ${currentPage}`
                    : `Go to page ${pageNumber}`
                }
              >
                {pageNumber}
              </Link>
            </li>
          )
        )}
      </ul>
      <span
        className={`ml-sm flex items-center justify-center ${
          currentPage === totalPages ? 'text-surface-500' : ''
        }`}
      >
        <Link
          {...(currentPage < totalPages && {
            onClick: () => handleClick(currentPage + 1),
          })}
          disabled={currentPage === totalPages}
        >
          Next
        </Link>
        <ChevronRightIcon className='h-4 w-4 ml-xs' />
      </span>
    </nav>
  )
}

export default Pagination
