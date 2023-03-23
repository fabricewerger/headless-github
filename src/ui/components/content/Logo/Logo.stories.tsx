import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Logo from './Logo'

export default {
  title: 'Components/Content/Logo',
  component: Logo,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
        labels: {
          standard: 'Standard',
          text: 'Text',
          full: 'Full',
          textBlack: 'Text black',
        },
      },
      options: ['standard'],
      defaultValue: 'standard',
    },
    size: {
      name: 'size',
      description: 'Select the Logo size',
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => (
  <div className='p-4'>
    <Logo {...args} />
  </div>
)

export const Standard = Template.bind({})

Standard.args = {
  variant: 'standard',
  size: 'md',
}
