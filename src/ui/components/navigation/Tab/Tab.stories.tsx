import type { Meta, StoryObj } from '@storybook/react'

import Tab from './Tab'

const tab: Meta<typeof Tab> = {
  title: 'Components/Navigation/Tab',
  component: Tab,
  argTypes: {
    isActive: {
      name: 'isActive',
      description: 'Set if tab is active',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    handleClick: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
}

export default tab
type Story = StoryObj<typeof Tab>

export const Primary: Story = {
  args: {
    isActive: true,
  },
  render: (args) => (
    <div className='p-4'>
      <Tab {...args} />
    </div>
  ),
}
