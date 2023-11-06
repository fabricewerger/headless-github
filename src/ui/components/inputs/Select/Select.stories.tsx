import { useArgs } from '@storybook/client-api'
import type { Meta, StoryObj } from '@storybook/react'

import Select, { SelectOption } from './Select'

const select: Meta<typeof Select> = {
  title: 'Components/Inputs/Select',
  component: Select,
  argTypes: {
    disabled: {
      name: 'disabled',
      description: 'If the Select is disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    error: {
      name: 'error',
      description: 'If the Select is has an error',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    success: {
      name: 'success',
      description: 'If the Select is valid',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    onValueChange: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    hint: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    triggerText: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export default select
type Story = StoryObj<typeof Select>

export const Primary: Story = {
  args: {
    disabled: false,
    error: false,
    success: false,
  },
  decorators: [
    (Story, Context) => {
      const [{ value }, updateArgs] = useArgs()
      return Story({ ...Context, updateArgs, value })
    },
  ],
  render: (args, { updateArgs, value }) => {
    return (
      <div className='p-4'>
        <Select
          {...args}
          value={value}
          placeholder='Select'
          triggerText='View by:'
          onValueChange={(value) => updateArgs({ value })}
        >
          <SelectOption value='Option 1'>Option 1</SelectOption>
          <SelectOption value='Option 2'>Option 2</SelectOption>
          <SelectOption value='Option 3'>Option 3</SelectOption>
        </Select>
      </div>
    )
  },
}
