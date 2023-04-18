import type { Meta, StoryObj } from '@storybook/react'

import List from './List'

const list: Meta<typeof List> = {
  title: 'Components/Content/List',
  component: List,
  argTypes: {
    direction: {
      name: 'direction',
      description: 'Specify the direction of the list',
      control: {
        type: 'radio',
      },
      options: ['row', 'column'],
      defaultValue: false,
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof List>

export default list
type Story = StoryObj<typeof list>

export const Primary: Story = {
  args: { direction: 'column' },
  render: (args) => (
    <div className='w-96 p-4'>
      <List {...args}>
        <span className='text-base'>List item</span>
        <span className='text-base'>List item</span>
        <span className='text-base'>List item</span>
      </List>
    </div>
  ),
}
