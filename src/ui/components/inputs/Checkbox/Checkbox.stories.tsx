import { useArgs } from '@storybook/client-api'
import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

const checkBox: Meta<typeof Checkbox> = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Logo size',
      control: {
        type: 'radio',
      },
      labels: {
        md: 'medium',
        lg: 'large',
      },
      options: ['md', 'lg'],
      defaultValue: 'md',
    },
    error: {
      name: 'error',
      description: 'Set if invalid',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    id: {
      table: {
        disable: true,
      },
    },
    checked: {
      name: 'checked',
      description: 'Set if checked',
      control: {
        type: 'boolean',
      },
      options: [true, false],
      defaultValue: 'false',
    },
    disabled: {
      name: 'disabled',
      description: '-',
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
    className: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
}

export default checkBox
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  decorators: [
    (Story, Context) => {
      const [{ checked }, updateArgs] = useArgs()
      return Story({ ...Context, updateArgs, checked })
    },
  ],
  render: (args, { updateArgs, checked }) => {
    return (
      <div className='p-4'>
        <Checkbox
          {...args}
          checked={checked}
          onChange={(checked) => {
            updateArgs({ checked: checked })
          }}
        />
      </div>
    )
  },
  args: {
    error: false,
    checked: false,
    disabled: false,
  },
}
