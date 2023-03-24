interface generatePageNumbersProps {
  totalPages: number
  currentPage: number
  pageNumbersToShow: number
}

const generatePageNumbers = ({
  totalPages,
  currentPage,
  pageNumbersToShow,
}: generatePageNumbersProps) => {
  const lastPageNumber = totalPages
  const currentPageNumber =
    currentPage <= lastPageNumber ? currentPage : lastPageNumber
  const maxPagesBeforeCurrentPage = Math.floor(pageNumbersToShow / 2)
  const maxPagesAfterCurrentPage = Math.ceil(pageNumbersToShow / 2) - 1
  let startPage = 1
  let endPage = lastPageNumber

  if (lastPageNumber <= 1) {
    return [currentPageNumber]
  }

  if (currentPageNumber <= maxPagesBeforeCurrentPage) {
    startPage = 1
    endPage = pageNumbersToShow
  } else if (currentPageNumber + maxPagesAfterCurrentPage >= lastPageNumber) {
    startPage = lastPageNumber - pageNumbersToShow + 1
  } else {
    startPage = currentPageNumber - maxPagesBeforeCurrentPage
    endPage = currentPageNumber + maxPagesAfterCurrentPage
  }

  let pageNumbers: Array<string | number> = Array.from(
    Array(endPage + 1 - startPage).keys()
  )
    .map((pageNumber) => startPage + pageNumber)
    .filter((pageNumber) => pageNumber <= lastPageNumber && pageNumber > 0)

  if (typeof pageNumbers[0] === 'number' && pageNumbers[0] > 1) {
    if (pageNumbers[0] <= 2) {
      pageNumbers = [1, ...pageNumbers]
    } else {
      const ellipsis = pageNumbers[0] > 3 ? '...' : 2
      pageNumbers = [1, ellipsis, ...pageNumbers]
    }
  }

  if (
    pageNumbers[pageNumbers.length - 1] !== lastPageNumber &&
    typeof pageNumbers[pageNumbers.length - 1] === 'number'
  ) {
    if (pageNumbers[pageNumbers.length - 1] === lastPageNumber - 1) {
      pageNumbers = [...pageNumbers, lastPageNumber]
    } else {
      const ellipsis =
        (pageNumbers[pageNumbers.length - 1] as number) < lastPageNumber - 2
          ? '...'
          : lastPageNumber - 1
      pageNumbers = [...pageNumbers, ellipsis, lastPageNumber]
    }
  }

  return pageNumbers
}

export default generatePageNumbers
