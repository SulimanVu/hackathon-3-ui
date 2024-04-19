import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { FormItem, FormItemProps, Input } from '../components';

const meta: Meta = {
  title: 'Form/FormItem',
  component: FormItem,
};

export default meta;

type TemplateProps = FormItemProps;

const InlineFormItemTemplate: StoryFn<TemplateProps> = (args) => (
  <FormItem label="Username" name="username" {...args}>
    <Input style={{ width: 250 }} placeholder="Input placeholder" />
  </FormItem>
);

export const WithInlineFormItem: StoryFn<TemplateProps> = InlineFormItemTemplate.bind({});

const VerticalFormItemTemplate: StoryFn<TemplateProps> = (args) => (
  <FormItem label="Username" vertical required name="username" style={{ width: 250 }} {...args}>
    <Input placeholder="Input placeholder" />
  </FormItem>
);

export const WithVerticalFormItem: StoryFn<TemplateProps> = VerticalFormItemTemplate.bind({});
