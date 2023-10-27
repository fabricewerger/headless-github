import type { Meta, StoryObj } from '@storybook/react'

import Tabs, { Tab } from './Tabs'

const tabs: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export default tabs

type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Tab id={1}>Tab 1</Tab>
        <Tab id={2}>Tab 2</Tab>
        <Tab id={3}>Tab 3</Tab>
      </>
    ),
  },
  render: (args) => (
    <div className='p-4'>
      <Tabs {...args} />
    </div>
  ),
}
