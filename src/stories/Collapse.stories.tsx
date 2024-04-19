import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Collapse, Icon } from '../components';
import type { CollapseProps } from '../components';

const meta: Meta = {
  title: 'General/Collapse',
  component: Collapse,
};

export default meta;

type TemplateProps = CollapseProps;

const Template: StoryFn<TemplateProps> = ({ header, ...args }) => (
  <div style={{ width: '600px' }}>
    <Collapse header="Участок 123" {...args}>
      <ul style={{ listStyleType: 'none', padding: '0 0 0 12px', margin: 0 }}>
        <li>first</li>
        <li>second</li>
        <li>third</li>
      </ul>
    </Collapse>
  </div>
);

export const CollapseBase: StoryFn<TemplateProps> = Template.bind({});

export const CollapseDisabled: StoryFn<TemplateProps> = Template.bind({});
CollapseDisabled.args = {
  disabled: true,
};

export const CollapseBorderless: StoryFn<TemplateProps> = Template.bind({});
CollapseBorderless.args = {
  borderless: true,
};

export const CollapseDisabledAndBorderless: StoryFn<TemplateProps> = Template.bind({});
CollapseDisabledAndBorderless.args = {
  disabled: true,
  borderless: true,
};

export const CollapseHeaderRight: StoryFn<TemplateProps> = Template.bind({});
CollapseHeaderRight.args = {
  headerRight: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Icon as="PlayCircle" width={16} />
      <span>some text</span>
    </div>
  ),
};

export const CollapseGhost: StoryFn<TemplateProps> = Template.bind({});
CollapseGhost.args = {
  ghost: false,
};
