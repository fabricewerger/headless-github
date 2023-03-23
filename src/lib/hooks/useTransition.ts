import { useEffect, useState } from 'react'

interface useTransitionProps {
  isMounted: boolean
  unmountDelay: number
}

const useTransition = ({ isMounted, unmountDelay }: useTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    if (isMounted && !isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(true), 100)
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay)
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [unmountDelay, isMounted, isTransitioning])

  return isTransitioning
}

export default useTransition
