import React from 'react';

import { Tag, TagProps as AntdTagProps } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import cn from 'classnames';

import { IAppColor, useColor } from '@/styles/colors';

import styles from './StatusTag.module.scss';

export enum IProjectStatusEnum {
  draft = 'Черновик',
  agreed = 'На согласовании',
  rejected = 'Отклонен',
  notes = 'Заммечания',
  inProgress = 'В работе',
  completed = 'Завершен',
}

export type IProjectStatus = keyof typeof IProjectStatusEnum;

export interface StatusTagProps extends AntdTagProps {
  backgroundColor?: IAppColor;
  color?: IAppColor;
  size?: SizeType;
  status?: IProjectStatus;
  children?: IProjectStatusEnum | string;
}

export const StatusTag: React.FC<StatusTagProps> = ({
  backgroundColor = 'blue25',
  color = 'white100',
  size = 'small',
  status,
  ...antdProps
}) => (
  <Tag
    bordered={false}
    style={{
      backgroundColor: !status ? useColor(backgroundColor) : undefined,
      color: !status ? useColor(color) : undefined,
    }}
    className={cn(styles.status, styles[size], status ? styles[status] : '')}
    {...antdProps}
  />
);
