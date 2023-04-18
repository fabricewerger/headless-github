import type { Meta, StoryObj } from '@storybook/react'

import Hr from './Hr'

const hr: Meta<typeof Hr> = {
  title: 'Components/Content/Hr',
  component: Hr,
  argTypes: {},
}

export default hr
type Story = StoryObj<typeof Hr>

export const Primary: Story = {
  args: {},
  render: () => (
    <div className='p-4'>
      <Hr />
    </div>
  ),
}
