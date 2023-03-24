import { useArgs } from '@storybook/client-api'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Select, { SelectOption } from './Select'

export default {
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
    onValueChange: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  const [{ value }, updateArgs] = useArgs()

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
}

export const Standard = Template.bind({})

Standard.args = {
  placeholder: 'Select:',
  value: 'Option 1',
}
