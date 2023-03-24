import { EyeIcon } from '@heroicons/react/24/solid'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Tag from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      description: 'Select the Tag size',
      control: {
        type: 'select',
        labels: {
          md: 'Medium',
          sm: 'Small',
        },
      },
      options: ['md', 'sm'],
      defaultValue: 'md',
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
    iconPosition: {
      control: {
        type: 'radio',
      },
      if: { arg: 'icon' },
    },
    type: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => (
  <div className='p-4'>
    <Tag {...args} />
  </div>
)

export const Red = Template.bind({})

Red.args = {
  children: 'Almost sold out',
  size: 'sm',
  variant: 'red',
}

export const Blue = Template.bind({})

Blue.args = {
  children: 'Very popular',
  size: 'sm',
  variant: 'blue',
}

export const Yellow = Template.bind({})

Yellow.args = {
  children: 'Only 3 left',
  size: 'sm',
  variant: 'yellow',
}

export const Icon = Template.bind({})

Icon.args = {
  children: 'Only 3 left',
  size: 'sm',
  variant: 'icon',
  icon: <EyeIcon className='h-4 w-4' />,
  iconPosition: 'left',
}

export const Amount = Template.bind({})

Amount.args = {
  children: '4000',
  size: 'sm',
  variant: 'amount',
}

export const Disabled = Template.bind({})

Disabled.args = {
  children: '4000',
  size: 'sm',
  variant: 'disabled',
}
