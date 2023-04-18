import type { Meta, StoryObj } from '@storybook/react'

import Breadcrumbs from './Breadcrumbs'

const breadCrumbs: Meta<typeof Breadcrumbs> = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    breadcrumbs: {
      table: {
        disable: true,
      },
    },
    currentUrl: {
      table: {
        disable: true,
      },
    },
  },
}

export default breadCrumbs
type Story = StoryObj<typeof Breadcrumbs>

const breadcrumbs = [
  {
    id: '1c',
    label: 'page 1',
    href: '/',
  },
  {
    id: '1f',
    label: 'page 2',
    href: '/product',
  },
]

export const Primary: Story = {
  args: {
    breadcrumbs: breadcrumbs,
    currentUrl: '/',
  },
  render: (args) => (
    <div className='p-4'>
      <Breadcrumbs {...args} />
    </div>
  ),
}
