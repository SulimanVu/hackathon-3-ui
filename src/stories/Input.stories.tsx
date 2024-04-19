import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Flex, Input, FormItem, Text, InputPassword } from '../components';
import type { InputProps } from '../components';

const meta: Meta = {
  title: 'Form/Input',
  component: Input,
};

export default meta;

type TemplateProps = InputProps;

const UncontrolledTemplate: StoryFn<TemplateProps> = (args) => (
  <Input style={{ width: 250 }} {...args} placeholder="Input placeholder" />
);

export const InputUncontrolled: StoryFn<TemplateProps> = UncontrolledTemplate.bind({});

const ControlledTemplate: StoryFn<TemplateProps> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Flex vertical style={{ width: 250 }}>
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input placeholder"
      />
      <Text>Input value: {value}</Text>
    </Flex>
  );
};

export const InputControlled: StoryFn<TemplateProps> = ControlledTemplate.bind({});

const StatusTemplate: StoryFn<TemplateProps> = (args) => (
  <Flex vertical gap="10px" style={{ width: 250 }}>
    {(['', 'error', 'warning'] as InputProps['status'][]).map((status) => (
      <Input
        key={status}
        {...args}
        status={status}
        placeholder={`${status === '' ? 'default' : status} input`}
      />
    ))}
  </Flex>
);

export const InputWithStatus: StoryFn<TemplateProps> = StatusTemplate.bind({});

const PasswordTemplate: StoryFn<TemplateProps> = (args) => (
  <InputPassword style={{ width: 250 }} {...args} placeholder="Enter pass" />
);

export const PasswordInput: StoryFn<TemplateProps> = PasswordTemplate.bind({});

const InlineFormItemTemplate: StoryFn<TemplateProps> = (args) => (
  <FormItem label="Username" name="username">
    <Input style={{ width: 250 }} {...args} placeholder="Input placeholder" />
  </FormItem>
);

export const WithInlineFormItemInput: StoryFn<TemplateProps> = InlineFormItemTemplate.bind({});

const VerticalFormItemTemplate: StoryFn<TemplateProps> = (args) => (
  <FormItem label="Username" vertical name="username" style={{ width: 250 }}>
    <Input {...args} placeholder="Input placeholder" />
  </FormItem>
);

export const WithVerticalFormItemTemplate: StoryFn<TemplateProps> = VerticalFormItemTemplate.bind(
  {},
);
