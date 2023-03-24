import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import Pagination from './Pagination'

export default {
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
    currentIndex: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [value, setValue] = useState(args.currentPage)

  return (
    <div className='p-4'>
      <Pagination
        {...args}
        onChange={(...params) => {
          args.onChange && args.onChange(...params)
          setValue(...params)
        }}
        currentPage={value}
      />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  totalPages: 10,
  currentPage: 2,
}
