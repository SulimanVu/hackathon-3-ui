import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { ProgressLine } from '../components';
import type { ProgressLineProps } from '../components';

const meta: Meta = {
  title: 'General/ProgressLine',
  component: ProgressLine,
};

export default meta;

type TemplateProps = ProgressLineProps;

const Template: StoryFn<TemplateProps> = (args) => (
  <div style={{ width: 180 }}>
    <ProgressLine {...args} />
  </div>
);

export const Progress: StoryFn<TemplateProps> = Template.bind({});
Progress.args = {
  percent: 50,
  strokeColor: 'blue100',
};
