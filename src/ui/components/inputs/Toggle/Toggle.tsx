import * as RadixToggle from '@radix-ui/react-switch'

interface ToggleProps {
  size?: 'lg' | 'md'
  disabled?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange: (checked: boolean) => void
}

interface IToggleFamilyClasses {
  size: Record<string, string>
}

const toggleFamilyClasses: IToggleFamilyClasses = {
  size: {
    md: 'w-10 h-5',
    lg: 'w-[50px] h-[26px]',
  },
}

const Toggle = ({ disabled, size = 'md', onChange, ...props }: ToggleProps) => {
  return (
    <div className={`flex items-center`}>
      <RadixToggle.Root
        className={`${toggleFamilyClasses['size'][size]} focus:border-primary-800 relative rounded-full focus:outline-surface-200 disabled:!bg-surface-300 data-[state=checked]:bg-primary-base data-[state=unchecked]:bg-surface-200 [&_svg]:stroke-primary-900`}
        disabled={disabled}
        onCheckedChange={(checked) => onChange(checked)}
        {...props}
      >
        <RadixToggle.Thumb
          className={
            'data-[state=checked]:text-slate-50 absolute top-1/2 left-0.5 block h-[calc(100%-4px)] -translate-y-1/2 rounded-full bg-surface-white pl-[calc(50%-4px)] transition-all duration-200 data-[state=checked]:left-full data-[state=checked]:-translate-x-[calc(100%+2px)]'
          }
        ></RadixToggle.Thumb>
      </RadixToggle.Root>
    </div>
  )
}

export default Toggle
