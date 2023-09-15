import { useArgs } from '@storybook/client-api'
import type { Meta, StoryObj } from '@storybook/react'

import Pagination from './Pagination'

const pagination: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  argTypes: {
    totalPages: {
      name: 'totalPages',
      description: 'Select the total pages',
      control: {
        type: 'select',
      },
      options: [1, 2, 10],
      defaultValue: 10,
    },
    pageNumbersToShow: {
      name: 'pageNumbersToShow',
      description:
        'Select the number of pages to show. Hint: Set to 1 for mobile view.',
      control: {
        type: 'select',
      },
      options: [1, 2, 3],
      defaultValue: 3,
    },
    currentPage: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
}

export default pagination
type Story = StoryObj<typeof Pagination>

export const Primary: Story = {
  args: {
    totalPages: 10,
    currentPage: 2,
  },
  decorators: [
    (Story, Context) => {
      const [{ value }, updateArgs] = useArgs()
      return Story({ ...Context, updateArgs, value })
    },
  ],
  render: (args, { updateArgs, value }) => (
    <div className='p-4'>
      <Pagination
        {...args}
        onChange={(value) => updateArgs(value)}
        currentPage={value}
      />
    </div>
  ),
}
