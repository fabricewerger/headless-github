import { PriceTagIcon, GlobeIcon } from '@/icons/index'
import type { Meta, StoryObj } from '@storybook/react'

import Pill from './Pill'

const pill: Meta<typeof Pill> = {
  title: 'Components/Content/Pill',
  component: Pill,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'variant',
      description: 'Set the pill variant',
      control: {
        type: 'radio',
      },
      options: ['primary', 'surface'],
    },
    icon: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
}

export default pill
type Story = StoryObj<typeof Pill>

export const Primary: Story = {
  args: {
    children: 'Default',
    variant: 'primary',
    icon: <GlobeIcon className='h-3 w-3' />,
  },
  render: (args) => (
    <div className='p-4'>
      <Pill {...args} />
    </div>
  ),
}

export const Surface: Story = {
  ...Primary,
  args: {
    children: 'Default',
    variant: 'surface',
    icon: <PriceTagIcon className='h-3 w-3' />,
  },
}
