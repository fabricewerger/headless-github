import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from './Input'

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder',
      control: {
        type: 'text',
      },
      defaultValue: 'Placeholder',
    },
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    error: {
      name: 'error',
      description: 'Error',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    success: {
      name: 'success',
      description: 'Success',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
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
}
