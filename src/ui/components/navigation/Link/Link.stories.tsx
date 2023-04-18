import type { Meta, StoryObj } from '@storybook/react'

import Link from './Link'

const link: Meta<typeof Link> = {
  title: 'Components/Navigation/Conditional Link',
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
    target: {
      table: {
        disable: true,
      },
    },
    disabled: {
      name: 'disabled',
      description: 'If the Link is disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
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
    children: <>This is a Link</>,
    href: 'https://youtube.com',
    target: '_blank',
    disabled: false,
  },
  render: (args) => (
    <div className='p-4'>
      <Link {...args} />
    </div>
  ),
}
