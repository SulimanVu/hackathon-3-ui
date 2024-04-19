import React from 'react';

import { Layout } from 'antd';

import { defaultHeaderProps } from './types';

import { Header, HeaderProps, SideBar, SideBarProps } from '@/components';

import styles from './PageLayout.module.scss';

export interface PageLayoutProps extends React.PropsWithChildren {
  headerProps: HeaderProps;
  sidebarProps: SideBarProps;
}

const { Content } = Layout;

export const PageLayout: React.FC<PageLayoutProps> = ({ children, headerProps, sidebarProps }) => {
  return (
    <Layout>
      <SideBar {...sidebarProps} />
      <Layout className={styles.headerAndContent}>
        <Header {...{ ...defaultHeaderProps, ...headerProps }} />
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};
