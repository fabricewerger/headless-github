import type { Meta, StoryObj } from '@storybook/react'
import { StarIcon } from '@heroicons/react/24/outline'

import Icon from './Icon'

const icon: Meta<typeof Icon> = {
  title: 'Components/Content/Icon',
  component: Icon,
  argTypes: {
    size: {
      name: 'size',
      description: 'Set the Icon size',
      control: {
        type: 'radio',
      },
      options: ['lg', 'md', 'sm'],
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export default icon
type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: { size: 'md', children: <StarIcon /> },
  render: (args) => (
    <div className='p-4'>
      <Icon {...args} />
    </div>
  ),
}
