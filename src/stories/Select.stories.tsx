import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Flex, Select, Text } from '../components';
import type { SelectOption, SelectProps } from '../components';

const meta: Meta = {
  title: 'Form/Select',
  component: Select,
};

export default meta;

type TemplateProps = SelectProps;

const options: SelectOption<number>[] = [
  {
    label: 'Томат',
    value: 1,
  },
  {
    label: 'Картошка',
    value: 2,
  },
  {
    label: 'Огурцы',
    value: 3,
  },
  {
    label: 'Петрушка',
    value: 4,
  },
  {
    label: 'Укроп',
    value: 5,
  },
];

const UncontrolledTemplate: StoryFn<TemplateProps> = (args) => (
  <Select options={options} style={{ width: 250 }} {...args} placeholder="Select placeholder" />
);

export const SelectUncontrolled: StoryFn<TemplateProps> = UncontrolledTemplate.bind({});

const ControlledTemplate: StoryFn<TemplateProps> = (args) => {
  // По-умолчанию должен быть выбран элемент с value === 1
  const [value, setValue] = useState(1);

  return (
    <Flex vertical style={{ width: 250 }}>
      <Select<number>
        {...args}
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        placeholder="Select placeholder"
      />
      <Text>Select value: {value}</Text>
    </Flex>
  );
};

export const SelectControlled: StoryFn<TemplateProps> = ControlledTemplate.bind({});

const StatusTemplate: StoryFn<TemplateProps> = (args) => (
  <Flex vertical gap="10px" style={{ width: 250 }}>
    {(['', 'error', 'warning'] as SelectProps['status'][]).map((status) => (
      <Select
        key={status}
        {...args}
        status={status}
        placeholder={`${status === '' ? 'default' : status} input`}
      />
    ))}
  </Flex>
);

export const SelectWithStatus: StoryFn<TemplateProps> = StatusTemplate.bind({});

const ControlledMultipleTemplate: StoryFn<TemplateProps> = (args) => {
  // По-умолчанию должен быть выбран элемент с value === 1
  const [value, setValue] = useState<number[]>([1]);

  return (
    <Flex vertical style={{ width: 250 }}>
      <Select<number[]>
        {...args}
        mode="multiple"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        placeholder="Select placeholder"
      />
      <Text>Select value: {JSON.stringify(value, null, 2)}</Text>
    </Flex>
  );
};

export const SelectMultipleModeControlled: StoryFn<TemplateProps> = ControlledMultipleTemplate.bind(
  {},
);
