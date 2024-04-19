import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Text } from '../components';
import type { TextProps } from '../components';
import { IAppColor } from '../styles';

import { Grid, WithTitle, ThemeColor } from './utils';

const meta: Meta = {
  title: 'Theme/Colors',
  component: Text,
};

export default meta;

type TemplateProps = TextProps;

const Template: StoryFn<TemplateProps> = (args) => (
  <Grid cols={7}>
    {IAppColor.map((IAppColor) => (
      <WithTitle key={IAppColor} title={`${IAppColor} color`}>
        <ThemeColor color={IAppColor} />
      </WithTitle>
    ))}
  </Grid>
);

export const ThemeColors: StoryFn<TemplateProps> = Template.bind({});
