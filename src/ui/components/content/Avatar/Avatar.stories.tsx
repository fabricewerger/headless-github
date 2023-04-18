import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const avatar: Meta<typeof Avatar> = {
  title: 'Components/Content/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the avatar size',
      control: {
        type: 'radio',
      },
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
      },
    },
    imageURL: {
      table: {
        disable: true,
      },
    },
    userName: {
      table: {
        disable: true,
      },
    },
  },
}

export default avatar
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {},
  render: () => (
    <div className='p-4'>
      <Avatar />
    </div>
  ),
}

export const WithImage: Story = {
  ...Primary,
  args: {
    size: 'md',
    variant: 'primary',
    imageURL:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    userName: 'Salvador Dali',
  },
  render: (args) => (
    <div className='p-4'>
      <Avatar {...args} />
    </div>
  ),
}
