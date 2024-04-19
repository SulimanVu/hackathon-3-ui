import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Flex, TextArea, Text } from '../components';
import type { TextAreaProps } from '../components';

const meta: Meta = {
  title: 'Form/TextArea',
  component: TextArea,
};

export default meta;

type TemplateProps = TextAreaProps;

const UncontrolledTemplate: StoryFn<TemplateProps> = (args) => (
  <TextArea style={{ width: 250 }} {...args} placeholder="TextArea placeholder" />
);

export const TextAreaUncontrolled: StoryFn<TemplateProps> = UncontrolledTemplate.bind({});

const ControlledTemplate: StoryFn<TemplateProps> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Flex vertical style={{ width: 250 }}>
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="TextArea placeholder"
      />
      <Text>TextArea value: {value}</Text>
    </Flex>
  );
};

export const TextAreaControlled: StoryFn<TemplateProps> = ControlledTemplate.bind({});

const StatusTemplate: StoryFn<TemplateProps> = (args) => (
  <Flex vertical gap="10px" style={{ width: 250 }}>
    {(['', 'error', 'warning'] as TextAreaProps['status'][]).map((status) => (
      <TextArea
        key={status}
        maxLength={100}
        {...args}
        status={status}
        placeholder={`${status === '' ? 'default' : status} input`}
      />
    ))}
  </Flex>
);

export const TextAreaWithStatus: StoryFn<TemplateProps> = StatusTemplate.bind({});
