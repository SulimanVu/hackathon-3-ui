import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { SizeType } from 'antd/es/config-provider/SizeContext';

import { Icon, StatusTag } from '../components';
import type { StatusTagProps } from '../components';

import { VerticalList } from './utils';

const meta: Meta = {
  title: 'General/StatusTag',
  component: StatusTag,
};

export default meta;

type TemplateProps = StatusTagProps;

const sizes: SizeType[] = ['small', 'middle', 'large'];

const Template: StoryFn<TemplateProps> = (args) => (
  <VerticalList align="middle">
    {sizes.map((size) => (
      <StatusTag key={size} size={size} {...args}>
        {args.children}
      </StatusTag>
    ))}
  </VerticalList>
);

export const StatusTags: StoryFn<TemplateProps> = Template.bind({});
StatusTags.args = {
  children: 'Design',
  backgroundColor: 'blue25',
  color: 'blue110',
};

export const StatusWithIconTags: StoryFn<TemplateProps> = Template.bind({});
StatusWithIconTags.args = {
  children: 'Design',
  backgroundColor: 'blue25',
  color: 'blue110',
  icon: <Icon as="Star" color="#fff" />,
};
