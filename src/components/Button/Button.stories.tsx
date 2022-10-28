import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'

export default {
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Get in touch!</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  icon: faArrowRight,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  icon: faArrowRight,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'tertiary',
  icon: faArrowRight,
}
