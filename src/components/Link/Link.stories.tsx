import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Link } from './Link'

export default {
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} href="/#">
    Get in touch!
  </Link>
)

export const Default = Template.bind({})
Default.args = {}
