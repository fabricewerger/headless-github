import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Hr from './Hr'

export default {
  title: 'Components/Content/Hr',
  component: Hr,
  argTypes: {},
} as ComponentMeta<typeof Hr>

const Template: ComponentStory<typeof Hr> = () => (
  <div className='p-4'>
    <Hr />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {}
