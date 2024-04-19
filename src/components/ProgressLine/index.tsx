import React from 'react';

import { Progress, ProgressProps } from 'antd';
import cn from 'classnames';

import { IAppColor, useColor } from '@/styles';

import styles from './progress.module.scss';

export interface ProgressLineProps extends ProgressProps {
  strokeColor?: IAppColor;
}

export const ProgressLine: React.FC<ProgressLineProps> = ({
  percent = 0,
  strokeColor = 'blue100',
  ...antdProps
}) => {
  return (
    <Progress
      className={cn(styles.progress, antdProps.className)}
      strokeWidth={8}
      percent={percent}
      strokeColor={useColor(strokeColor)}
      {...antdProps}
    />
  );
};
