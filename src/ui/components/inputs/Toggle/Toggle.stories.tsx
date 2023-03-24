import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Toggle from './Toggle'

export default {
  title: 'Components/Inputs/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Toggle size',
      control: {
        type: 'radio',
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Choose to disable component',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => (
  <div className='p-4'>
    <Toggle {...args} />
  </div>
)

export const Md = Template.bind({})

Md.args = {
  size: 'md',
}

export const Lg = Template.bind({})

Lg.args = {
  size: 'md',
}
