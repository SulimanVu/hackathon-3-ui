import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Flex, InputNumber, Text } from '../components';
import type { InputNumberProps } from '../components';

const meta: Meta = {
  title: 'Form/InputNumber',
  component: InputNumber,
};

export default meta;

type TemplateProps = InputNumberProps;

const UncontrolledTemplate: StoryFn<TemplateProps> = (args) => (
  <InputNumber style={{ width: 250 }} {...args} placeholder="InputNumber placeholder" />
);

export const InputNumberUncontrolled: StoryFn<TemplateProps> = UncontrolledTemplate.bind({});

const ControlledTemplate: StoryFn<TemplateProps> = (args) => {
  const [value, setValue] = useState(0);

  return (
    <Flex vertical style={{ width: 250 }}>
      <InputNumber
        {...args}
        value={value}
        onChange={(value) => setValue(value ? parseFloat(`${value}`) : 0)}
        placeholder="InputNumber placeholder"
      />
      <Text>InputNumber value: {value}</Text>
    </Flex>
  );
};

export const InputNumberControlled: StoryFn<TemplateProps> = ControlledTemplate.bind({});

const StatusTemplate: StoryFn<TemplateProps> = (args) => (
  <Flex vertical gap="10px" style={{ width: 250 }}>
    {(['', 'error', 'warning'] as InputNumberProps['status'][]).map((status) => (
      <InputNumber
        key={status}
        {...args}
        status={status}
        placeholder={`${status === '' ? 'default' : status} input`}
      />
    ))}
  </Flex>
);

export const InputNumberWithStatus: StoryFn<TemplateProps> = StatusTemplate.bind({});
