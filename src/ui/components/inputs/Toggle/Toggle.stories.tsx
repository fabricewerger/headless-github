import type { Meta, StoryObj } from '@storybook/react'

import Toggle from './Toggle'

const toggle: Meta<typeof Toggle> = {
  title: 'Components/Inputs/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Toggle size',
      control: {
        type: 'radio',
      },
      options: ['lg', 'md'],
    },
    disabled: {
      name: 'disabled',
      description: 'Choose to disable component',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
}

export default toggle
type Story = StoryObj<typeof Toggle>

export const Primary: Story = {
  args: {
    size: 'md',
    disabled: false,
  },
  render: (args) => (
    <div className='p-4'>
      <Toggle {...args} />
    </div>
  ),
}
