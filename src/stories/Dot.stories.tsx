import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Dot } from '../components';
import type { DotProps } from '../components';

const meta: Meta = {
  title: 'General/Dot',
  component: Dot,
};

export default meta;

type TemplateProps = DotProps;

const Template: StoryFn<TemplateProps> = ({ size, padding, color, ...args }) => (
  <Dot key={size} size={size} padding={padding} color={color} {...args} />
);

export const DotBase: StoryFn<TemplateProps> = Template.bind({});
DotBase.args = {
  size: 12,
  padding: 10,
  color: 'blue75',
};
