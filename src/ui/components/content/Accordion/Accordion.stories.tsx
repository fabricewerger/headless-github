import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Accordion from './Accordion'

export default {
  title: 'Components/Content/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <div className='max-w-[420px] p-4'>
    <Accordion {...args} id='1'>
      <Accordion.Title id='1'>Test</Accordion.Title>
      <Accordion.Body id='1'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </Accordion.Body>
    </Accordion>
    <Accordion {...args} id='2'>
      <Accordion.Title id='2'>Test</Accordion.Title>
      <Accordion.Body id='2'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </Accordion.Body>
    </Accordion>
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  isOpen: false,
}
