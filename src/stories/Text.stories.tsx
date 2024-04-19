import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Text } from '../components';
import type { TextProps } from '../components';
import { IAppColor } from '../styles';

import { Grid, WithTitle } from './utils';

const meta: Meta = {
  title: 'General/Text',
  component: Text,
};

export default meta;

type TemplateProps = TextProps;

const Template: StoryFn<TemplateProps> = (args) => <Text {...args}>Example</Text>;

const WithColorsTemplate: StoryFn<TemplateProps> = () => (
  <Grid cols={5} background="rgba(0, 0, 0, 0.5)">
    {IAppColor.map((IAppColor) => (
      <WithTitle key={IAppColor} titleColor="white" title={`${IAppColor} color`}>
        <Text color={IAppColor}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, cumque quam a, vel
          nisi obcaecati ad aut officia nihil, asperiores iste dolorem commodi consectetur nam nulla
          veritatis nostrum. Est, harum?
        </Text>
      </WithTitle>
    ))}
  </Grid>
);

export const TextBase: StoryFn<TemplateProps> = Template.bind({});

export const ColoredText: StoryFn<TemplateProps> = WithColorsTemplate.bind({});
