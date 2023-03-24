import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Tab from './Tab'

export default {
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
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = (args) => (
  <div className='p-4'>
    <Tab {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  children: 'Tab Option 1',
}
