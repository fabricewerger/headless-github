import type { Meta, StoryObj } from '@storybook/react'

import Rating from './Rating'

const rating: Meta<typeof Rating> = {
  title: 'Components/Content/Rating',
  component: Rating,
  argTypes: {
    rating: {
      name: 'rating',
      description: 'Add rating (out of 5)',
      control: {
        type: 'number',
        step: 0.2,
      },
    },
  },
}

export default rating
type Story = StoryObj<typeof Rating>

export const Primary: Story = {
  args: {
    rating: 3.5,
  },
  render: (args) => (
    <div className='p-4'>
      <Rating {...args} />
    </div>
  ),
}
