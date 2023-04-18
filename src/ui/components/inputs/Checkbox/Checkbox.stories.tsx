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
    swatch: {
      table: {
        disable: true,
      },
    },
    overrideClasses: {
      table: {
        disable: true,
      },
    },
  },
}

export default checkBox
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: (args) => (
    <div className='p-4'>
      <Checkbox {...args} />
    </div>
  ),
  args: {
    error: false,
    checked: true,
    disabled: false,
  },
}
