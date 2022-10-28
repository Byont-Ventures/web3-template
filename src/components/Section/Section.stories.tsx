import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Section } from './Section'

export default {
  component: Section,
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>Hello World</Section>
)

export const Default = Template.bind({})
Default.args = {
  fullWidth: false,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
}
