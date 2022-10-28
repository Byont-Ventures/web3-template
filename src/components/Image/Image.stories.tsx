import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Image } from './Image'

import TeamPhoto from '../../../public/images/team-photo.jpg'

export default {
  component: Image,
} as ComponentMeta<typeof Image>

// eslint-disable-next-line jsx-a11y/alt-text
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: TeamPhoto,
  alt: 'Team Photo',
}
