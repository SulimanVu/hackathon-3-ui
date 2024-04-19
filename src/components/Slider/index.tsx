import React from 'react';

import { Slider as AntdSlider, SliderSingleProps as AntdSliderProps } from 'antd';
import cn from 'classnames';

import styles from './Slider.module.scss';

export interface SliderProps extends AntdSliderProps {}

export const Slider: React.FC<SliderProps> = ({ className, ...antdProps }) => (
  <AntdSlider className={cn(styles.slider, className)} {...antdProps} />
);
