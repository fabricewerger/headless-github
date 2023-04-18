import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const input: Meta<typeof Input> = {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    type: {
      name: 'type',
      description: 'Set type of input',
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number'],
    },
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      control: 'boolean',
      defaultValue: false,
    },
    error: {
      name: 'error',
      description: 'Error',
      control: 'boolean',
      defaultValue: false,
    },
    success: {
      name: 'success',
      description: 'Success',
      control: 'boolean',
      defaultValue: false,
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
  },
}

export default input
type Story = StoryObj<typeof Input>

const BaseInput: Story = {
  render: (args) => (
    <div className='p-4'>
      <Input {...args} />
    </div>
  ),
}

export const Primary: Story = {
  ...BaseInput,
  args: {
    label: 'Your name',
    required: true,
    error: false,
    disabled: false,
    success: false,
    type: 'text',
  },
}

export const Error: Story = {
  ...BaseInput,
  args: {
    label: 'Your name',
    required: true,
    error: true,
    disabled: false,
    success: false,
    type: 'text',
  },
}

export const Success: Story = {
  ...BaseInput,
  args: {
    label: 'Your name',
    required: true,
    error: false,
    disabled: false,
    success: true,
    type: 'text',
  },
}

export const Password: Story = {
  ...BaseInput,
  args: {
    label: 'Your name',
    required: true,
    error: false,
    disabled: false,
    success: false,
    type: 'password',
  },
}

/*const Template: ComponentStory<typeof Input> = (args) => (
  <div className={`p-4`}>
    <Input {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  id: '1',
  required: true,
}

export const Error = Template.bind({})

Error.args = {
  id: '1',
  error: true,
  value: 'Wrong input',
}

export const Success = Template.bind({})

Success.args = {
  id: '1',
  success: true,
  value: 'First name',
}

export const Password = Template.bind({})

Password.args = {
  id: '1',
  type: 'password',
  value: 'password',
}

export const Search = Template.bind({})

Search.args = {
  id: '1',
  type: 'search',
  placeholder: 'Search',
}*/
