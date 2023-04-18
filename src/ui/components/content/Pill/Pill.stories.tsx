import { EyeIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
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
    icon: <EyeIcon className='h-4 w-4' />,
  },
  render: (args) => (
    <div className='p-4'>
      <Pill {...args} />
    </div>
  ),
}

export const Secondary: Story = {
  ...Primary,
  args: {
    children: 'Default',
    variant: 'secondary',
    icon: <InformationCircleIcon className='h-4 w-4' />,
  },
}
