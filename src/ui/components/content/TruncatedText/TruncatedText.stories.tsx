import type { Meta, StoryObj } from '@storybook/react'

import TruncatedText from './TruncatedText'

const truncatedText: Meta<typeof TruncatedText> = {
  title: 'Components/Content/TruncatedText',
  component: TruncatedText,
  argTypes: {
    maxLength: {
      name: 'maxLength',
      description: 'Set the max length of characters',
      control: {
        type: 'number',
      },
      defaultValue: 250,
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export default truncatedText
type Story = StoryObj<typeof TruncatedText>

export const Primary: Story = {
  args: {
    maxLength: 250,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
  },
  render: (args) => (
    <div className='p-4'>
      <TruncatedText {...args} />
    </div>
  ),
}
