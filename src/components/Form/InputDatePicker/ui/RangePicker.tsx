import React from 'react';

import { DatePicker as AntdDatePicker, TimeRangePickerProps } from 'antd';
import cn from 'classnames';

import styles from './inputDatePicker.module.scss';

const AntdRangePicker = AntdDatePicker.RangePicker;

export interface RangePickerProps extends TimeRangePickerProps {}

export const RangePicker: React.FC<RangePickerProps> = ({ className, ...props }) => {
  return (
    <AntdRangePicker
      format={'DD.MM.YYYY'}
      showNow={true}
      className={cn(styles.rangePicker, className)}
      {...props}
    />
  );
};
