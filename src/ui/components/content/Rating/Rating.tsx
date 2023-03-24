import { StarIcon } from '@heroicons/react/24/outline'

interface RatingProps {
  rating: number
}

interface IRatingFamilyClasses {
  variant: Record<string, string>
}

const ratingFamilyClasses: IRatingFamilyClasses = {
  variant: {
    filled: 'fill-primary stroke-primary',
    outline: 'fill-surface-white stroke-primary',
  },
}

const TOTAL_STARS = 5

const Rating = ({ rating }: RatingProps) => {
  const fullStars = Math.floor(rating)
  const demiStar = (rating - fullStars) * 100

  return (
    <div className='inline-flex gap-xs'>
      {Array.from(Array(TOTAL_STARS).keys()).map((star) => {
        return (
          <span className='relative' key={star}>
            <StarIcon
              className={`h-md w-md ${
                ratingFamilyClasses['variant'][
                  star < fullStars ? 'filled' : 'outline'
                ]
              }`}
            />
            {star === fullStars && (
              <span
                className='absolute left-0 top-0 overflow-hidden text-primary-600'
                style={{ width: `${demiStar}%` }}
              >
                <StarIcon
                  className={`h-md w-md ${ratingFamilyClasses['variant']['filled']}`}
                />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default Rating
