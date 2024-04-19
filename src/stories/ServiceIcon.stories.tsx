import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { ServiceIcon } from '../components';
import type { ServiceIconProps } from '../components';

const meta: Meta = {
  title: 'General/Icon',
  component: ServiceIcon,
};

export default meta;

type TemplateProps = ServiceIconProps;

const Template: StoryFn<TemplateProps> = (args) => <ServiceIcon {...args} />;

export const ServicesIcon: StoryFn<TemplateProps> = Template.bind({});
ServicesIcon.args = {
  as: 'DiscoveryCompass',
};
