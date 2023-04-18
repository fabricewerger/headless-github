import { BeakerIcon } from '@heroicons/react/24/solid'
import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const button: Meta<typeof Button> = {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'tertiary', 'breadcrumb'],
    },
    size: {
      name: 'size',
      description: 'Select the size',
      control: {
        type: 'radio',
      },
      labels: {
        sm: 'small',
        lg: 'large',
      },
      options: ['sm', 'lg'],
      defaultValue: 'lg',
    },
    disabled: {
      name: 'disabled',
      description: 'If the button is disabled',
      control: 'boolean',
      defaultValue: false,
    },
    submitting: {
      name: 'submitting',
      description: 'Display a loading icon',
      control: 'boolean',
      defaultValue: false,
    },
    href: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    iconPosition: {
      control: {
        type: 'radio',
      },
      if: { arg: 'icon' },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
}

export default button
type Story = StoryObj<typeof Button>

const BaseButton: Story = {
  render: (args) => (
    <div className='p-4'>
      <Button {...args} />
    </div>
  ),
}

export const Primary: Story = {
  ...BaseButton,
  args: {
    children: 'Button CTA',
    variant: 'primary',
    disabled: false,
    submitting: false,
  },
}

export const Secondary: Story = {
  ...BaseButton,
  args: {
    children: 'Button CTA',
    variant: 'secondary',
    disabled: false,
    submitting: false,
  },
}

export const Tertiary: Story = {
  ...BaseButton,
  args: {
    children: 'Button CTA',
    variant: 'tertiary',
    disabled: false,
    submitting: false,
  },
}

export const WithIcon: Story = {
  ...BaseButton,
  args: {
    children: 'Button CTA',
    variant: 'primary',
    disabled: false,
    submitting: false,
    icon: <BeakerIcon className='h-4 w-4' />,
    iconPosition: 'left',
  },
}
