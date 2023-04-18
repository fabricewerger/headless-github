import { EyeIcon } from '@heroicons/react/24/solid'
import type { Meta, StoryObj } from '@storybook/react'

import Tag from './Tag'

const tag: Meta<typeof Tag> = {
  title: 'Components/Content/Tag',
  component: Tag,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      description: 'Select the Tag size',
      control: {
        type: 'select',
        labels: {
          md: 'Medium',
          sm: 'Small',
        },
      },
      options: ['md', 'sm'],
      defaultValue: 'md',
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    iconPosition: {
      control: {
        type: 'radio',
      },
      if: { arg: 'icon' },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
}

export default tag
type Story = StoryObj<typeof Tag>

const Base: Story = {
  render: (args) => (
    <div className='p-4'>
      <Tag {...args} />
    </div>
  ),
}

export const Error: Story = {
  ...Base,
  args: {
    children: 'Almost sold out',
    size: 'sm',
    variant: 'error',
  },
}

export const Info: Story = {
  ...Base,
  args: {
    children: 'Very popular',
    size: 'sm',
    variant: 'info',
  },
}

export const Attention: Story = {
  ...Base,
  args: {
    children: 'Only 3 left',
    size: 'sm',
    variant: 'attention',
  },
}

export const WithIcon: Story = {
  ...Base,
  args: {
    children: 'Almost sold out',
    size: 'sm',
    variant: 'icon',
    icon: <EyeIcon className='h-4 w-4' />,
    iconPosition: 'left',
  },
}
