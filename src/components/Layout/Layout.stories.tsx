import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Layout } from './Layout'
import { Section } from '../Section'
import { Text } from '../Text'

export default {
  component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <Section>
      <Text variant="heading2Xl">Byont Labs</Text>
    </Section>
  </Layout>
)

export const Default = Template.bind({})
Default.args = {}
