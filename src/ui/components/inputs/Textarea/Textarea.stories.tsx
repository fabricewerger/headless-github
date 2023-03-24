import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TextArea from './Textarea'

export default {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    label: {
      name: 'label',
      description: 'Optional description',
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <div className={`p-4`}>
    <TextArea {...args} />
  </div>
)

export const Standard = Template.bind({})

Standard.args = {
  id: '1',
  required: true,
  rows: 4,
  placeholder: 'Insert your description here',
}

export const Error = Template.bind({})

Error.args = {
  id: '1',
  required: true,
  rows: 4,
  placeholder: 'Insert your description here',
  error: true,
}

export const Success = Template.bind({})

Success.args = {
  id: '1',
  required: true,
  rows: 4,
  placeholder: 'Insert your description here',
  success: true,
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: '1',
  required: true,
  rows: 4,
  placeholder: 'Insert your description here',
  disabled: true,
}
