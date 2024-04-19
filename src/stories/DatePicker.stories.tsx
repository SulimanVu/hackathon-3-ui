import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { DatePicker, DatePickerProps } from '../components';

const meta: Meta = {
  title: 'Form/DatePicker',
  component: DatePicker,
};

export default meta;

type TemplateProps = DatePickerProps;

const InputDateTemplate: StoryFn<TemplateProps> = (args) => (
  <DatePicker style={{ width: 250 }} {...args} />
);

export const DatePickerBase: StoryFn<TemplateProps> = InputDateTemplate.bind({});
