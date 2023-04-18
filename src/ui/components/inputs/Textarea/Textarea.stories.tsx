import type { Meta, StoryObj } from '@storybook/react'

import TextArea from './Textarea'

const textArea: Meta<typeof TextArea> = {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    rows: {
      table: {
        disable: true,
      },
    },
  },
}

export default textArea
type Story = StoryObj<typeof TextArea>

const BaseTextArea: Story = {
  render: (args) => (
    <div className='p-4'>
      <TextArea {...args} />
    </div>
  ),
}

export const Primary: Story = {
  ...BaseTextArea,
  args: {
    id: '1',
    required: true,
    rows: 4,
    placeholder: 'Insert your description here',
    disabled: false,
    error: false,
    success: false,
    hint: '',
  },
}

export const Success: Story = {
  ...BaseTextArea,
  args: {
    id: '1',
    required: true,
    rows: 4,
    placeholder: 'Insert your description here',
    disabled: false,
    error: false,
    success: true,
    hint: '',
  },
}

export const Disabled: Story = {
  ...BaseTextArea,
  args: {
    id: '1',
    required: true,
    rows: 4,
    placeholder: 'Insert your description here',
    disabled: true,
    error: false,
    success: false,
    hint: '',
  },
}

export const Error: Story = {
  ...BaseTextArea,
  args: {
    id: '1',
    required: true,
    rows: 4,
    placeholder: 'Insert your description here',
    disabled: false,
    error: true,
    success: false,
    hint: '',
  },
}

/*const Template: ComponentStory<typeof TextArea> = (args) => (
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
}*/
