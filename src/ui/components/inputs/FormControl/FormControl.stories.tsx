import type { Meta, StoryObj } from '@storybook/react'

import FormControl from './FormControl'
import Input from '../Input'

const formControl: Meta<typeof FormControl> = {
  title: 'Components/Inputs/FormControl',
  component: FormControl,
  argTypes: {
    id: {
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

export default formControl
type Story = StoryObj<typeof FormControl>

const BaseFormControl: Story = {
  render: (args) => (
    <div className='p-4'>
      <FormControl {...args}>
        <Input type='text' id='1' />
      </FormControl>
    </div>
  ),
}

export const Primary: Story = {
  ...BaseFormControl,
  args: {
    label: 'Your name',
    required: true,
    error: false,
    disabled: false,
    success: false,
  },
}

export const WithHint: Story = {
  ...BaseFormControl,
  args: {
    label: 'Your name',
    hint: 'Hint: Your full name',
    required: true,
    error: false,
    disabled: false,
    success: false,
  },
}
