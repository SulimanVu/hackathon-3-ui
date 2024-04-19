import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import type { AvatarProps, AvatarSize } from '../components';
import { Avatar } from '../components';

import { VerticalList } from './utils';

const meta: Meta = {
  title: 'General/Avatar',
  component: Avatar,
};

export default meta;

type TemplateProps = AvatarProps;

const sizes: AvatarSize[] = ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl'];

const Template: StoryFn<TemplateProps> = (args) => (
  <VerticalList align="middle">
    {sizes.map((size) => (
      <Avatar key={size} size={size} {...args}>
        {size}
      </Avatar>
    ))}
  </VerticalList>
);

export const PrimaryAvatar: StoryFn<TemplateProps> = Template.bind({});
PrimaryAvatar.args = {};

export const SecondaryAvatar: StoryFn<TemplateProps> = Template.bind({});
SecondaryAvatar.args = {
  showOnline: true,
  isOnline: true,
};
