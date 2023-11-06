import * as RadixAccordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@/icons/index'
import { type ReactNode } from 'react'

interface AccordionTitleProps {
  children: ReactNode
  id: string
  className?: string
}

interface AccordionBodyProps {
  children: ReactNode
  className?: string
  id: string
}

interface AccordionProps {
  children: ReactNode
  isOpen?: boolean
  id: string
}

const Accordion = ({ children, isOpen = false, id }: AccordionProps) => {
  return (
    <RadixAccordion.Root
      type='single'
      {...(isOpen && { defaultValue: id })}
      collapsible
    >
      {children}
    </RadixAccordion.Root>
  )
}

const AccordionTitle = ({ children, id, className }: AccordionTitleProps) => {
  return (
    <div className='w-full'>
      <RadixAccordion.Item
        value={id}
        className='bg-transparent group relative flex w-full items-center justify-between py-sm text-base font-bold text-surface-black border-b border-surface-50'
      >
        <span className={className || ''}>{children}</span>
        <RadixAccordion.Trigger>
          <ChevronDownIcon
            className='inline h-4 w-4 text-surface-black transition group-data-[state=open]:rotate-180'
            aria-hidden
          />
        </RadixAccordion.Trigger>
      </RadixAccordion.Item>
    </div>
  )
}

const AccordionBody = ({ children, className, id }: AccordionBodyProps) => {
  return (
    <RadixAccordion.Item value={id} className='flex'>
      <RadixAccordion.Content
        className={`bg-neutral-200 mt-sm w-full overflow-hidden text-base text-surface-black data-[state=open]:animate-radixDown data-[state=closed]:animate-radixUp ${
          className || ''
        }`}
      >
        {children}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  )
}

Accordion.Title = AccordionTitle
Accordion.Body = AccordionBody

export default Accordion
