import React from "react";

import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

import styles from './Button.module.scss';

export interface ButtonProps extends AntdButtonProps {}

export const Button: React.FC<ButtonProps> = ({ ...antdProps }) => {
  return <AntdButton className={styles.button} {...antdProps}></AntdButton>;
};
