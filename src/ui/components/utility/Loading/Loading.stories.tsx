import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Loading from './Loading'

export default {
  title: 'Components/Utility/Loading',
  component: Loading,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Icon size',
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = (args) => (
  <div className='align-items flex h-full w-full items-center justify-center p-4'>
    <Loading {...args} />
  </div>
)

export const Dots = Template.bind({})

Dots.args = {
  size: 'md',
}
