import type { Meta, StoryObj } from '@storybook/react'

import Accordion from './Accordion'

const accordion: Meta<typeof Accordion> = {
  title: 'Components/Content/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    isOpen: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
  },
}

export default accordion
type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  args: {},
  render: () => (
    <div className='max-w-[420px] p-4'>
      <Accordion id='1'>
        <Accordion.Title id='1'>Test</Accordion.Title>
        <Accordion.Body id='1'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </Accordion.Body>
      </Accordion>
      <Accordion id='2'>
        <Accordion.Title id='2'>Test</Accordion.Title>
        <Accordion.Body id='2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </Accordion.Body>
      </Accordion>
    </div>
  ),
}
