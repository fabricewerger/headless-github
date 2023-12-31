interface LoadingProps {
  size: 'sm' | 'md' | 'lg'
  variant: 'primary' | 'surface' | 'neutral'
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
    primary: '[&>span]:bg-primary',
    surface: '[&>span]:bg-surface-500',
    neutral: '[&>span]:bg-surface-white',
  },
}

const Loading = ({ size = 'md', variant = 'primary' }: LoadingProps) => {
  return (
    <div
      title='loading'
      className={`flex [&>span+span]:ml-2 [&>span:last-child]:animation-delay-200 [&>span:nth-child(2)]:animation-delay-100 [&>span]:inline-block [&>span]:animate-bounce 
          [&>span]:rounded-full 
          ${loadingFamilyClasses['size'][size]} 
          ${loadingFamilyClasses['variant'][variant]}`}
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </div>
  )
}

export default Loading
