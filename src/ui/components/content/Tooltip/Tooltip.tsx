import * as RadixTooltip from '@radix-ui/react-tooltip'
import { type ReactElement } from 'react'

import Icon from '@/ui/components/content/Icon'

interface TooltipProps {
  children: React.ReactNode
  size?: 'lg' | 'md' | 'sm'
  icon: ReactElement
}

interface ITooltipClasses {
  size: Record<string, string>
}

const tooltipClasses: ITooltipClasses = {
  size: {
    sm: 'text-xs py-1.5 px-3',
    md: 'text-sm py-1.5 px-4',
    lg: 'text-md py-1.5 px-4',
  },
}

const Tooltip = ({ children, size = 'lg', icon }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={200}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <Icon size='md'>{icon}</Icon>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={`rounded-full shadow select-none text-neutral-base bg-primary-white data-[state=delayed-open]:animate-slidein will-change-transform ${tooltipClasses['size'][size]}`}
            sideOffset={5}
          >
            {children}
            <RadixTooltip.Arrow className='fill-white' />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export default Tooltip
