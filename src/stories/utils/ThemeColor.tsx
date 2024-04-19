import React from 'react';

import { classNames } from '../../helpers';
import { IAppColor } from '../../styles';

import styles from './styles.module.scss';

export interface ColorProps {
  color: IAppColor;
}

export const ThemeColor = ({ color }) => {
  return <div className={classNames(styles.color, styles[`color_${color}`])} />;
};
