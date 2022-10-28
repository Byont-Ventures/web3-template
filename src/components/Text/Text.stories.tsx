import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Get in touch!</Text>
)

export const Heading2Xl = Template.bind({})
Heading2Xl.args = {
  variant: 'heading2Xl',
  as: 'h1',
}

export const HeadingXl = Template.bind({})
HeadingXl.args = {
  variant: 'headingXl',
  as: 'h1',
}

export const HeadingLg = Template.bind({})
HeadingLg.args = {
  variant: 'headingLg',
  as: 'h2',
}

export const HeadingMd = Template.bind({})
HeadingMd.args = {
  variant: 'headingMd',
  as: 'h3',
}

export const HeadingSm = Template.bind({})
HeadingSm.args = {
  variant: 'headingSm',
  as: 'h4',
}

export const BodyLarge = Template.bind({})
BodyLarge.args = {
  variant: 'bodyLg',
  as: 'p',
}

export const BodyBase = Template.bind({})
BodyBase.args = {
  variant: 'bodyMd',
  as: 'p',
}

export const BodySmall = Template.bind({})
BodySmall.args = {
  variant: 'bodySm',
  as: 'p',
}
