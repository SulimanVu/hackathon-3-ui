import React, { useEffect, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Icon, PageLayout, PageLayoutProps, Text, getDefaultSelectedKey } from '../components';
import { ServiceName } from '../types';

const meta: Meta = {
  title: 'Widgets/PageLayout',
  component: PageLayout,
};

export default meta;

type TemplateProps = PageLayoutProps;

const testItems = new Array(60).fill(0).map((_, index) => ({
  label: <a href={`#${index}`}>item-{index}</a>,
  key: index,
  icon: <Icon as="Home" size={16} />,
  route: `route${index}`,
}));
const defaultSelectedKey = getDefaultSelectedKey(testItems, window.location.pathname);

const Template: StoryFn<TemplateProps> = (args) => {
  const { headerProps, sidebarProps } = args;

  const [activeService, setActiveService] = useState<ServiceName>(headerProps.activeService);

  useEffect(() => {
    setActiveService(headerProps.activeService);
  }, [headerProps.activeService]);

  return (
    <PageLayout
      sidebarProps={sidebarProps}
      headerProps={{ activeService, onServiceClick: setActiveService }}
    >
      <Text>Blabla bla page content</Text>
    </PageLayout>
  );
};

export const Primary: StoryFn<TemplateProps> = Template.bind({});
Primary.args = {
  headerProps: {
    activeService: 'intranet',
    // !Todo донастройка сторей у сторибука для того что бы он видел ReactJSX как свойства
    // right: <UserAndNotification />,
  },
  sidebarProps: {
    items: testItems,
    defaultSelectedKeys: [defaultSelectedKey],
  },
};
