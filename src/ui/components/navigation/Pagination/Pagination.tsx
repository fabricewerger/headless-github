import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useMemo } from 'react'

import generatePageNumbers from '@/lib/utils/pagination'
import Link from '@/ui/components/navigation/Link/'

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
        <ChevronLeftIcon className='h-5 w-5' />
        <Link
          {...(currentPage > 1 && {
            onClick: () => handleClick(currentPage - 1),
          })}
          disabled={currentPage === 1}
        >
          Back
        </Link>
      </span>
      <ul className='flex flex-wrap [&_span]:block [&_span]:flex [&_span]:h-8 [&_span]:w-8 [&_span]:items-center [&_span]:justify-center'>
        {pageNumbers.map((pageNumber, index) =>
          pageNumber === '...' ? (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>{pageNumber}</li>
          ) : (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`cursor-pointer transition-colors hover:bg-surface-100 hover:underline ${
                pageNumber === currentPage ? 'bg-surface-200' : ''
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
        <ChevronRightIcon className='h-5 w-5' />
      </span>
    </nav>
  )
}

export default Pagination
