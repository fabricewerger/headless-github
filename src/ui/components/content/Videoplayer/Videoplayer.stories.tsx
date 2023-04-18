import type { Meta, StoryObj } from '@storybook/react'

import Videoplayer from './Videoplayer'

const videoPlayer: Meta<typeof Videoplayer> = {
  title: 'Components/Content/Videoplayer',
  component: Videoplayer,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Videoplayer size',
      control: {
        type: 'select',
        labels: {
          lg: 'Large',
          md: 'Medium',
          sm: 'Small',
        },
      },
      options: ['lg', 'md', 'sm'],
      defaultValue: 'md',
    },
    controls: {
      name: 'controls',
      description: 'If the controls are shown.',
      control: 'boolean',
      defaultValue: false,
    },
    loop: {
      name: 'loop',
      description: 'If the loop is disabled',
      control: 'boolean',
      defaultValue: false,
    },
    autoplay: {
      name: 'autoplay',
      description: 'If the autplay is disabled',
      control: 'boolean',
      defaultValue: true,
    },
  },
}

export default videoPlayer
type Story = StoryObj<typeof Videoplayer>

export const Primary: Story = {
  args: {
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    autoplay: true,
    loop: false,
    controls: false,
  },
  render: (args) => (
    <div className='p-4'>
      <Videoplayer {...args} />
    </div>
  ),
}
