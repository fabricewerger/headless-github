import * as RadixAvatar from '@radix-ui/react-avatar'

interface AvatarProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'primary' | 'neutral'
  imageURL?: string
  userName?: string
}

interface IAvatarFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const iconFamilyClasses: IAvatarFamilyClasses = {
  size: {
    sm: 'w-8 h-8 text-md',
    md: 'w-11 h-11 text-lg',
    lg: 'w-14 h-14 text-xl',
  },
  variant: {
    primary: 'bg-primary text-surface-white',
    surface: 'bg-surface-500 text-surface-white',
  },
}

const Avatar = ({
  size = 'md',
  variant = 'primary',
  imageURL,
  userName,
}: AvatarProps) => {
  return (
    <div className='flex gap-2.5'>
      <RadixAvatar.Root
        className={`flex items-center justify-center align-middle overflow-hidden select-none rounded-full bg-primary-10 ${iconFamilyClasses['size'][size]}`}
      >
        {imageURL && (
          <RadixAvatar.Image
            className='w-full h-full object-cover rounded-full'
            src={imageURL}
            alt={userName || ''}
          />
        )}
        <RadixAvatar.Fallback
          className={`w-full h-full flex items-center justify-center font-medium ${iconFamilyClasses['variant'][variant]}`}
          delayMs={600}
        >
          ?
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    </div>
  )
}

export default Avatar
