import { EyeIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Pill from './Pill'

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> = (args) => (
  <div className='p-4'>
    <Pill {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  children: 'Default',
  variant: 'primary',
  icon: <EyeIcon className='h-4 w-4' />,
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Default',
  variant: 'secondary',
  icon: <InformationCircleIcon />,
}
