import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkipToMain } from './SkipToMain'

export default {
  component: SkipToMain,
} as ComponentMeta<typeof SkipToMain>

const Template: ComponentStory<typeof SkipToMain> = (args) => (
  <SkipToMain {...args} />
)

export const Default = Template.bind({})
Default.args = {}
