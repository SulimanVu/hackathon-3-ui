import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import type { SegmentedProps } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

import { Segmented } from '../components';

import { VerticalList } from './utils';

const meta: Meta = {
  title: 'General/Segmented',
  component: Segmented,
};

export default meta;

type TemplateProps = SegmentedProps;

const TemplateBase: StoryFn<TemplateProps> = ({ ...args }) => (
  <div style={{ width: 350 }}>
    <Segmented {...args} />
  </div>
);

export const SegmentedBase: StoryFn<TemplateProps> = TemplateBase.bind({});
SegmentedBase.args = {
  options: ['Процент', 'Объем'],
};

const sizes: SizeType[] = ['large', 'middle', 'small'];

const TemplateSizes: StoryFn<TemplateProps> = ({ ...args }) => (
  <VerticalList align="middle">
    {sizes.map((size) => (
      <Segmented key={size} size={size} {...args} />
    ))}
  </VerticalList>
);

export const SegmentedSizes: StoryFn<TemplateProps> = TemplateSizes.bind({});
SegmentedSizes.args = {
  options: ['First tab', 'Second tab', 'Third tab'],
};
