import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Icon, icons as iconsList } from '../components';
import type { IconProps, IconName } from '../components';

import { Filter, Grid, WithTitle } from './utils';

const meta: Meta = {
  title: 'General/Icon',
  component: Icon,
};

export default meta;

type TemplateProps = IconProps;

const icons = Object.keys(iconsList) as IconName[];

const Template: StoryFn<TemplateProps> = (args) => (
  <Filter placeholder="Введите часть названия иконки">
    {(search) => (
      <Grid cols={10}>
        {icons
          .filter((iconName) => iconName.toLowerCase().includes(search.toLowerCase()))
          .map((iconName) => (
            <WithTitle key={iconName} background="white" title={iconName}>
              <Icon size={20} {...args} as={iconName} />
            </WithTitle>
          ))}
      </Grid>
    )}
  </Filter>
);

export const Icons: StoryFn<TemplateProps> = Template.bind({});
Icons.args = {
  color: '#121212',
  size: 30,
};
