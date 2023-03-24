import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface TruncatedTextProps {
  children: string
  maxLength: number
}

const TruncatedText = ({ maxLength, children }: TruncatedTextProps) => {
  const [truncate, setTruncate] = useState<boolean>(true)

  if (children.length > maxLength)
    return (
      <>
        {truncate ? `${children.slice(0, maxLength)}...` : children}
        <span
          className='mt-sm flex cursor-pointer items-center text-primary underline underline-offset-2'
          onClick={() => setTruncate(!truncate)}
        >
          {truncate ? 'Show more' : 'Show less'}
          <span
            className={`ml-xs inline-block transition ${
              truncate ? 'rotate-0' : 'rotate-180'
            }`}
          >
            <ChevronDownIcon className='h-[16px] w-[16px]' />
          </span>
        </span>
      </>
    )

  return <>{children}</>
}

export default TruncatedText
