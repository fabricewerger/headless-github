import type { Meta, StoryObj } from '@storybook/react'

import Logo from './Logo'

const logo: Meta<typeof Logo> = {
  title: 'Components/Content/Logo',
  component: Logo,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Set the variant type',
      control: {
        type: 'radio',
        labels: {
          standard: 'Standard',
          text: 'Text',
          full: 'Full',
          textBlack: 'Text black',
        },
      },
      options: ['standard'],
      defaultValue: 'standard',
    },
    size: {
      name: 'size',
      description: 'Set the logo size',
      control: {
        type: 'select',
      },
      options: ['md'],
      defaultValue: 'md',
    },
    alt: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Logo>

export default logo
type Story = StoryObj<typeof logo>

export const Primary: Story = {
  args: {
    variant: 'standard',
    size: 'md',
  },
  render: (args) => (
    <div className='p-4 bg-surface-black'>
      <Logo {...args} />
    </div>
  ),
}
