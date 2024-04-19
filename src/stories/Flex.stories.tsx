import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Flex, FlexProps } from '../components';

const meta: Meta = {
  title: 'Layout/Flex',
  component: Flex,
};

export default meta;

type TemplateProps = FlexProps;

const Template: StoryFn<TemplateProps> = (args) => <Flex {...args} gap={8} />;

export const FlexBase: StoryFn<TemplateProps> = Template.bind({});
FlexBase.args = {
  vertical: false,
  children: [
    <div key={1} style={{ padding: 10, backgroundColor: 'red' }}>
      1
    </div>,
    <div key={2} style={{ padding: 10, backgroundColor: 'blue' }}>
      2
    </div>,
    <div key={3} style={{ padding: 10, backgroundColor: 'green' }}>
      3
    </div>,
  ],
};
