import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Switch } from '../components';
import type { SwitchProps } from '../components';

const meta: Meta = {
  title: 'General/Switch',
  component: Switch,
};

export default meta;

type TemplateProps = SwitchProps;

const Template: StoryFn<TemplateProps> = (args) => <Switch />;

export const SwitchBase: StoryFn<TemplateProps> = Template.bind({});
SwitchBase.args = {};
