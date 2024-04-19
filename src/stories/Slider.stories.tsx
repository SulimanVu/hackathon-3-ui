import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Slider } from '../components';
import type { SliderProps } from '../components';

const meta: Meta = {
  title: 'General/Slider',
  component: Slider,
};

export default meta;

type TemplateProps = SliderProps;

const Template: StoryFn<TemplateProps> = (args) => <Slider {...args} />;

export const SliderDefault: StoryFn<TemplateProps> = Template.bind({});
SliderDefault.args = {
  defaultValue: 30,
  tooltip: { open: true },
};
