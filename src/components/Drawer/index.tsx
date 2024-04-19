import React from 'react';

import { Drawer as DrawerAntd, DrawerProps as DrawerPropsAntd } from 'antd';
import cn from 'classnames';

import styles from './drawer.module.scss';

export interface DrawerProps extends DrawerPropsAntd {
  defaultCloseIcon?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({ defaultCloseIcon = false, ...props }) => {
  return <DrawerAntd className={cn({ [styles.iconDisabled]: defaultCloseIcon })} {...props} />;
};
