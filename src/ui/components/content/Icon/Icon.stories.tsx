import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { StarIcon } from '@heroicons/react/24/outline'

import Icon from './Icon'

export default {
  title: 'Components/Content/Icon',
  component: Icon,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Icon size',
      control: {
        type: 'radio',
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <div className='p-4'>
    <Icon {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  size: 'md',
  children: <StarIcon />,
}
