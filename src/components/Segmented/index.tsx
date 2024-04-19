import React from 'react';

import { Segmented as AntdSegmented, SegmentedProps } from 'antd';
import cn from 'classnames';

import styles from './segmented.module.scss';

export const Segmented: React.FC<SegmentedProps> = ({ ref, ...props }) => {
  return <AntdSegmented className={cn(styles.segmented, props.className)} {...props} />;
};
