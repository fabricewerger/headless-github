import type { Meta, StoryObj } from '@storybook/react'

import Typography from './Typography'

const typography: Meta<typeof Typography> = {
  title: 'Typography/Text',
  component: Typography,
  argTypes: {
    children: {
      name: 'text',
      description: 'Fill in your own text',
      control: {
        type: 'text',
      },
    },
    as: {
      name: 'as',
      description: 'Select typography tag',
      control: {
        type: 'select',
        labels: {
          p: 'p',
          span: 'span',
        },
      },
      options: ['p', 'span'],
      defaultValue: 'p',
    },
    size: {
      name: 'size',
      description: 'Select the typography size',
      control: {
        type: 'select',
        labels: {
          xs: 'Extra small',
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
          base: 'Base',
        },
      },
      options: ['xs', 'sm', 'md', 'lg', 'base'],
      defaultValue: 'base',
    },
    className: {
      table: {
        disable: true,
      },
    },
    heading: {
      table: {
        disable: true,
      },
    },
  },
}

export default typography
type Story = StoryObj<typeof Typography>

export const Primary: Story = {
  args: {
    as: 'p',
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue magna felis, non interdum sapien lacinia blandit. Morbi dui augue, auctor id est nec, cursus viverra ipsum. In ut ex iaculis.`,
    size: 'md',
  },
  render: (args) => (
    <div className='p-4'>
      <Typography {...args} />
    </div>
  ),
}
