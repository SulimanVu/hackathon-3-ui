import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { RangePicker, RangePickerProps } from '../components';

const meta: Meta = {
  title: 'Form/RangePicker',
  component: RangePicker,
};

export default meta;

type TemplateProps = RangePickerProps;

const InputDateTemplate: StoryFn<TemplateProps> = (args) => (
  <RangePicker style={{ width: 250 }} {...args} />
);

export const RangePickerBase: StoryFn<TemplateProps> = InputDateTemplate.bind({});
