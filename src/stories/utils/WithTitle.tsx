import React from 'react';

import { Typography } from 'antd';

import styles from './styles.module.scss';

export interface WithTitleProps extends React.PropsWithChildren {
  title: string;
  background?: string;
  titleColor?: string;
}

export const WithTitle: React.FC<WithTitleProps> = ({
  title,
  titleColor,
  background,
  children,
}) => (
  <div className={styles.withTitle} style={{ background }}>
    <div className={styles.withTitle_content}>{children}</div>
    <Typography.Text className={styles.withTitle_title} style={{ color: titleColor }}>
      {title}
    </Typography.Text>
  </div>
);
