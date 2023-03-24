interface LoadingProps {
  size: 'sm' | 'md' | 'lg'
  variant: 'primary' | 'neutral' | 'white'
}

interface ILoadingFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const loadingFamilyClasses: ILoadingFamilyClasses = {
  size: {
    sm: '[&>span]:w-1 [&>span]:h-1',
    md: '[&>span]:w-1.5 [&>span]:h-1.5',
    lg: '[&>span]:w-sm [&>span]:h-sm',
  },
  variant: {
    primary: '[&>span]:bg-primary-400',
    neutral: '[&>span]:bg-surface-800',
    white: '[&>span]:bg-surface-white',
  },
}

const Loading = ({ size = 'md', variant = 'primary' }: LoadingProps) => {
  return (
    <div
      className={`flex [&>span+span]:ml-2 [&>span:last-child]:animation-delay-200 [&>span:nth-child(2)]:animation-delay-100 [&>span]:inline-block [&>span]:animate-bounce 
          [&>span]:rounded-full 
          ${loadingFamilyClasses['size'][size]} 
          ${loadingFamilyClasses['variant'][variant]}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Loading
