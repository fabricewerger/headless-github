import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Link from './Link'

export default {
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
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => (
  <div className='p-4'>
    <Link {...args} />
  </div>
)

export const InternalLink = Template.bind({})

InternalLink.args = {
  children: <>This is a Link</>,
  href: '/',
}

export const ExternalLink = Template.bind({})

ExternalLink.args = {
  children: <>This is a Link</>,
  href: 'https://youtube.com',
  target: '_blank',
}
