import type { Meta, StoryObj } from '@storybook/react'

import Link from './Link'

const link: Meta<typeof Link> = {
  title: 'Components/Navigation/Link',
  component: Link,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text',
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
}

export default link
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  args: {
    href: 'https://youtube.com',
    children: 'This is a link',
  },
  render: (args) => (
    <div className='p-4'>
      <Link {...args} />
    </div>
  ),
}
