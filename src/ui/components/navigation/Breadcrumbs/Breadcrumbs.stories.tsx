import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from './Breadcrumbs'

const breadcrumbs: Meta<typeof Breadcrumbs> = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export default breadcrumbs
type Story = StoryObj<typeof Breadcrumbs>

export const Primary: Story = {
  args: {},
  render: (args) => (
    <div className='p-4'>
      <Breadcrumbs {...args}>
        <Breadcrumbs.Item href='/category'>Category</Breadcrumbs.Item>
        <Breadcrumbs.Item href='/pdp'>PDP</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  ),
}
