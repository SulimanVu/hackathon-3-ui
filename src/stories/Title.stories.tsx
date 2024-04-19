import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Title } from '../components';
import type { TitleProps } from '../components';

import { VerticalList } from './utils';

const meta: Meta = {
  title: 'General/Title',
  component: Title,
};

export default meta;

type TemplateProps = TitleProps;

const levels = [1, 2, 3, 4, 5];

const Template: StoryFn<TemplateProps> = (args) => (
  <VerticalList align="middle">
    {levels.map((level) => (
      <Title key={level} level={level as 1 | 2 | 3 | 4 | 5} {...args}>
        Example
      </Title>
    ))}
  </VerticalList>
);

export const Heading: StoryFn<TemplateProps> = Template.bind({});
