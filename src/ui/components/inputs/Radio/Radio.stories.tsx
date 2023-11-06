import { useArgs } from '@storybook/client-api'
import type { Meta, StoryObj } from '@storybook/react'

import Radio from './Radio'

const radio: Meta<typeof Radio> = {
  title: 'Components/Inputs/Radio',
  component: Radio,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    checked: {
      name: 'checked',
      description: 'Set if checked',
      control: 'boolean',
      defaultValue: false,
    },
  },
}

export default radio
type Story = StoryObj<typeof Radio>

export const Primary: Story = {
  args: {
    checked: false,
  },
  decorators: [
    (Story, Context) => {
      const [{ checked }, updateArgs] = useArgs()
      return Story({ ...Context, updateArgs, checked })
    },
  ],
  render: (args, { updateArgs, checked }) => (
    <div className='p-4'>
      <Radio
        {...args}
        checked={checked}
        onChange={(checked) => {
          updateArgs({ checked: checked })
        }}
      />
    </div>
  ),
}
