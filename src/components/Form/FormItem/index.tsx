import React from 'react';

import { Form, FormItemProps as AntdFormItemProps } from 'antd';

import { classNames } from '@/helpers';

import styles from './FormItem.module.scss';

const { Item } = Form;

export interface FormItemProps<ValueType = any> extends AntdFormItemProps<ValueType> {
  vertical?: boolean;
}

export const FormItem = <ValueType = any,>({
  vertical,
  ...antdProps
}: FormItemProps<ValueType>) => {
  return (
    <Item<ValueType>
      {...antdProps}
      colon={false}
      className={classNames(
        styles.formItem_wrapper,
        { [styles.formItem_vertical]: vertical },
        antdProps.className,
      )}
    />
  );
};
