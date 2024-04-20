import React, { memo, useState } from 'react';

import { Menu, Layout, MenuProps, Flex } from 'antd';
import cn from 'classnames';

import { MenuItem } from '../types';

import { Scroll, Button, Icon, Text, Title } from '@/components';

import styles from './SideBar.module.scss';

const { Sider } = Layout;

export interface SideBarProps extends Omit<MenuProps, 'items'> {
  items: MenuItem[];
  addons?: React.ReactNode;
  previousPage?: string;
  initCollapsed?: boolean;
  className?: string;
}

export const SideBar = memo(({ previousPage, initCollapsed = false, ...props }: SideBarProps) => {
  const { items, className, ...antdProps } = props;

  const [collapsed, setCollapsed] = useState(initCollapsed);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className={cn(styles.sider, className)}
      width={320} // ширина сайдбара (px) в раскрытом состоянии
      collapsedWidth={64} // ширина сайдбара (px) в закрытом состоянии
      trigger={null} // убираем стандарт. кнопку для открыт/закрыт сайдбара
      style={{ background: 'white' }}
    >
      <div className={styles.logoWrapper}>
        {collapsed ? (
          <Icon as="Book" size={16} />
        ) : (
          <Flex>
            <Icon as="Book" className={styles.iconLogoDogma} />
            <Title>GENTLEMEN</Title>
          </Flex>
        )}
      </div>
      <Scroll fullSized>
        <nav className={styles.menuWrapper}>
          {previousPage && (
            <Flex gap={8} className={styles.previousPage} onClick={() => history.back()}>
              <Icon as="ArrowLeft" size={16} />
              {!collapsed && (
                <Text color="textNeutralSecondary" fontSize="small" fontWeight="medium">
                  {previousPage.toUpperCase()}
                </Text>
              )}
            </Flex>
          )}
          {props.addons}
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0, flexGrow: 1 }}
            inlineIndent={0}
            items={items}
            {...antdProps}
          />
        </nav>
      </Scroll>

      <div className={styles.triggerWrapper}>
        <Button
          block
          type="text"
          onClick={onToggle}
          className={styles.btnCollapsed}
          icon={
            collapsed ? (
              <Icon as="ArrowLineSideRight" size={20} />
            ) : (
              <Icon as="ArrowLineSideLeft" size={20} />
            )
          }
        >
          {!collapsed && 'Свернуть меню'}
        </Button>
      </div>
    </Sider>
  );
});
