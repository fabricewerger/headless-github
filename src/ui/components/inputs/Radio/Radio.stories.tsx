import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Radio from './Radio'

export default {
  title: 'Components/Inputs/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <div className='p-4'>
      <Radio {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
