import { ArrowRightIcon } from '@heroicons/react/24/solid'
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
      options: ['primary', 'secondary', 'surface'],
    },
    size: {
      name: 'size',
      description: 'Select the size',
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
    className: {
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
    size: 'md',
    children: 'Button CTA',
    variant: 'primary',
    disabled: false,
    submitting: false,
  },
  render: (args) => (
    <div className='p-4 bg-surface-100/40'>
      <Button {...args} />
    </div>
  ),
}

export const Secondary: Story = {
  ...BaseButton,
  args: {
    size: 'md',
    children: 'Button CTA',
    variant: 'secondary',
    disabled: false,
    submitting: false,
  },
}

export const Surface: Story = {
  ...BaseButton,
  args: {
    size: 'md',
    children: 'Button CTA',
    variant: 'surface',
    disabled: false,
    submitting: false,
  },
}

export const WithIcon: Story = {
  ...BaseButton,
  render: (args) => (
    <div className='p-4 bg-surface-100/40'>
      <Button {...args} />
    </div>
  ),
  args: {
    size: 'md',
    children: 'Button CTA',
    variant: 'primary',
    disabled: false,
    submitting: false,
    icon: <ArrowRightIcon className='h-5 w-5 ' />,
    iconPosition: 'trailing',
  },
}

export const IconOnly: Story = {
  ...BaseButton,
  render: (args) => (
    <div className='p-4 bg-surface-100/40'>
      <Button {...args} />
    </div>
  ),
  args: {
    size: 'md',
    variant: 'primary',
    disabled: false,
    submitting: false,
    icon: <ArrowRightIcon className='h-5 w-5 ' />,
    iconPosition: 'trailing',
  },
}
