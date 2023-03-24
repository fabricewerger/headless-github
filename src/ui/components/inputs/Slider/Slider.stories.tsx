import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Slider from './Slider'

export default {
  title: 'Components/Inputs/Slider',
  component: Slider,
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    step: {
      name: 'step',
      description: 'Set the step (int)',
      control: {
        type: 'number',
      },
      defaultValue: 1,
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      table: {
        disable: true,
      },
    },
    disabled: {
      name: 'disabled',
      description: 'If the slider is disabled',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    showInputControls: {
      name: 'showInputControls',
      description: 'Set if the number inputs are visible',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => (
  <div className='w-[220px] p-4'>
    <Slider {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  maxValue: 100,
  minValue: 0,
  defaultValue: [0, 100],
  label: 'Filter by price',
}
