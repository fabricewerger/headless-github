import type { Meta, StoryObj } from '@storybook/react'

import Loading from './Loading'

const loading: Meta<typeof Loading> = {
  title: 'Components/Utility/Loading',
  component: Loading,
  argTypes: {
    size: {
      name: 'size',
      description: 'Set the size',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      name: 'variant',
      description: 'Set the variant',
      control: {
        type: 'select',
      },
      options: ['primary', 'neutral', 'white'],
    },
  },
}

export default loading
type Story = StoryObj<typeof Loading>

export const Primary: Story = {
  render: (args) => (
    <div className='p-4'>
      <Loading {...args} />
    </div>
  ),
}
