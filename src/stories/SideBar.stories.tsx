import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Layout } from 'antd';

import { Icon, SideBar, getDefaultSelectedKey } from '../components';
import type { SideBarProps } from '../components';

const meta: Meta = {
  title: 'Widgets/SideBar',
  component: SideBar,
};

export default meta;

type TemplateProps = SideBarProps;

const testItems = [
  {
    label: <a href="#1">item-1</a>,
    key: '1',
    icon: <Icon as="Home" size={16} />,
    route: 'route1',
  },
  {
    label: <a href="#2">item-2</a>,
    key: '2',
    icon: <Icon as="User" size={16} />,
    route: 'route2',
  },
  {
    label: <a href="#3">item-3</a>,
    key: '3',
    icon: <Icon as="Users" size={16} />,
    route: 'route2',
  },
];
const defaultSelectedKey = getDefaultSelectedKey(testItems, window.location.pathname);

const Template: StoryFn<TemplateProps> = (args) => (
  <Layout>
    <SideBar {...args} />
  </Layout>
);

export const Primary: StoryFn<TemplateProps> = Template.bind({});
Primary.args = {
  items: testItems,
  defaultSelectedKeys: [defaultSelectedKey],
  previousPage: 'Проекты',
};
