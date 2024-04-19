import React from 'react';

import cn from 'classnames';

import { IAppColor } from '@/styles';

import styles from './dot.module.scss';

export interface DotProps {
  size?: number;
  color?: IAppColor;
  padding?: number;
}

export const Dot: React.FC<DotProps> = ({ size = 6, color = 'blue100', padding = 5 }) => {
  return (
    <div style={{ padding: `${padding}px` }} className={styles.dotBlock}>
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={cn(styles.dot, styles[`color_${color}`])}
      ></div>
    </div>
  );
};
