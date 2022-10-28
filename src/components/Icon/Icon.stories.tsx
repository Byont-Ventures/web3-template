import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from './Icon'
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: faArrowRight,
}
