import type { Meta, Story } from '@storybook/react'
import Breadcrumbs from './Breadcrumbs'

const breadcrumbsMeta: Meta = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export default breadcrumbsMeta

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

export const Default: Story = (args) => (
  <div className='p-4'>
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item href='/pdp'>PDP</Breadcrumbs.Item>
    </Breadcrumbs>
  </div>
)

Default.args = {
  children: breadcrumbs.map((item) => (
    <Breadcrumbs.Item key={item.id} href={item.href}>
      {item.label}
    </Breadcrumbs.Item>
  )),
}
