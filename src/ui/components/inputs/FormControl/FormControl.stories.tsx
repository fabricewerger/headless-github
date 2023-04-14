import type { ComponentMeta, ComponentStory } from '@storybook/react'

import FormControl from './FormControl'

export default {
  title: 'Components/Inputs/FormControl',
  component: FormControl,
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
} as ComponentMeta<typeof FormControl>

const Template: ComponentStory<typeof FormControl> = (args) => (
  <div className='p-4'>
    <FormControl {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {}
