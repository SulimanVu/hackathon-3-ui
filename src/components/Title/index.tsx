import React from 'react';

import { Typography } from 'antd';
import cn from 'classnames';

import styles from './title.module.scss';

export interface TitleProps extends React.ComponentProps<typeof Typography.Title> {}

const { Title: AntTitle } = Typography;

export const Title: React.FC<TitleProps> = ({ children, ...antdProps }) => {
  return (
    <AntTitle {...antdProps} className={cn(styles.title, antdProps.className)}>
      {children}
    </AntTitle>
  );
};
