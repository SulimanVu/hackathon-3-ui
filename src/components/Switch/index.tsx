import React from 'react';

import { Switch as AntdSwitch, SwitchProps as AntdSwitchProps } from 'antd';
import cn from 'classnames';

import styles from './switch.module.scss';

export interface SwitchProps extends AntdSwitchProps {}

export const Switch: React.FC<SwitchProps> = ({ className, ...props }) => {
  return <AntdSwitch className={cn(styles.switch, className)} {...props} />;
};
