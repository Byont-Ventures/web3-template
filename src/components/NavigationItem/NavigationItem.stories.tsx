import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NavigationItem } from './NavigationItem'

export default {
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>

const Template: ComponentStory<typeof NavigationItem> = (args) => (
  <NavigationItem {...args} href="/#">
    About us
  </NavigationItem>
)

export const Default = Template.bind({})
Default.args = {
  active: false,
  showIndicator: false,
}

export const ShowIndicator = Template.bind({})
ShowIndicator.args = {
  active: false,
  showIndicator: true,
}

export const Active = Template.bind({})
Active.args = {
  active: true,
  showIndicator: false,
}
