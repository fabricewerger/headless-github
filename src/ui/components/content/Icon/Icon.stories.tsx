import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'
import { AddIcon, MinusIcon } from '@/icons/index'

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
      options: ['lg', 'md'],
    },
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    href: {
      description: 'Define icon link',
      defaultValue: '/',
      control: {
        type: 'text',
      },
    },
  },
}

export default icon
type Story = StoryObj<typeof Icon>

export const PlusIcon: Story = {
  args: { size: 'md', children: <AddIcon className={'h-3 w-3'} />, href: '/' },
  render: (args) => (
    <div className='p-4'>
      <Icon {...args} />
    </div>
  ),
}

export const MinIcon: Story = {
  args: {
    size: 'md',
    children: <MinusIcon className={'h-3 w-3'} />,
    href: '/',
  },
  render: (args) => (
    <div className='p-4'>
      <Icon {...args} />
    </div>
  ),
}
