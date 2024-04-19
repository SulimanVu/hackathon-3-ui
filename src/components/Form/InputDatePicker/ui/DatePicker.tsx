import React from 'react';

import { DatePicker as AntdDatePicker, DatePickerProps as AntdDatePickerProps } from 'antd';
import cn from 'classnames';

import styles from './inputDatePicker.module.scss';

export interface DatePickerProps extends AntdDatePickerProps {}

export const DatePicker: React.FC<DatePickerProps> = ({ className, ...props }) => {
  return (
    <AntdDatePicker format={'DD.MM.YYYY'} className={cn(styles.dateInput, className)} {...props} />
  );
};
