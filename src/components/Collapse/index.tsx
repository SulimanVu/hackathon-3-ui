import React from 'react';

import { Collapse as AntdCollapse, CollapseProps as AntdCollapseProps, Flex } from 'antd';
import cn from 'classnames';

import styles from './collapse.module.scss';

export interface CollapseProps extends AntdCollapseProps {
  key?: string | number;
  header: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
  disabled?: boolean;
  borderless?: boolean;
}

export const Collapse: React.FC<CollapseProps> = (props) => {
  const {
    key,
    header,
    children,
    headerRight,
    disabled = false,
    borderless = false,
    bordered = false,
    ghost = true,
    className,
    ...antdProps
  } = props;

  const items = [
    {
      key,
      label: header,
      children: <Flex vertical>{children}</Flex>,
      extra: headerRight,
    },
  ];

  return (
    <AntdCollapse
      ghost={ghost}
      bordered={bordered}
      collapsible={disabled ? 'disabled' : 'header'}
      className={cn(
        styles.collapse,
        {
          [styles.borderless]: borderless,
        },
        className,
      )}
      items={items}
      {...antdProps}
    />
  );
};
