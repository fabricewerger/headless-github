import type { Meta, StoryObj } from '@storybook/react'

import Hr from './Hr'

const hr: Meta<typeof Hr> = {
  title: 'Components/Content/Hr',
  component: Hr,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'select',
      },
      options: ['primary', 'surface'],
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
}

export default hr
type Story = StoryObj<typeof Hr>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div className='p-4'>
      <Hr {...args} />
    </div>
  ),
}

export const Surface: Story = {
  ...Primary,
  args: {
    variant: 'surface',
  },
}
