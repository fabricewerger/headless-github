import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Checkbox from './Checkbox'

export default {
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
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div className='p-4'>
    <Checkbox {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  error: false,
  checked: true,
}
