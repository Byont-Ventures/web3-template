import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextContainer } from './TextContainer'
import { Text } from '../Text'

export default {
  component: TextContainer,
} as ComponentMeta<typeof TextContainer>

const Template: ComponentStory<typeof TextContainer> = (args) => (
  <TextContainer {...args}>
    <Text variant="heading2Xl" as="h1">
      Lorem ipsum dolor sit amet
    </Text>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed
      lobortis eros. Suspendisse a lacus sem. Suspendisse sed imperdiet lacus.
      Mauris nec felis ut odio feugiat fermentum eget at sem. Praesent fringilla
      pretium convallis. Ut non rutrum massa. Fusce enim nulla, commodo in
      pharetra quis, sagittis malesuada arcu. Donec malesuada magna non justo
      ultricies vehicula.
    </Text>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed
      lobortis eros. Suspendisse a lacus sem. Suspendisse sed imperdiet lacus.
      Mauris nec felis ut odio feugiat fermentum eget at sem. Praesent fringilla
      pretium convallis. Ut non rutrum massa. Fusce enim nulla, commodo in
      pharetra quis, sagittis malesuada arcu. Donec malesuada magna non justo
      ultricies vehicula.
    </Text>
  </TextContainer>
)

export const Default = Template.bind({})
Default.args = {}
