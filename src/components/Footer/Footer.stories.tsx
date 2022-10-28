import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from './Footer'

export default {
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Dark = Template.bind({})
Dark.args = {
  variant: 'dark',
}

export const ExtraDark = Template.bind({})
ExtraDark.args = {
  variant: 'extraDark',
}
