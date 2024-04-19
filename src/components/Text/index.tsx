import React from 'react';

import { Typography } from 'antd';
import cn from 'classnames';

import { IAppColor } from '@/styles';

import styles from './text.module.scss';

export interface TextProps extends Omit<React.ComponentProps<typeof Typography.Text>, 'color'> {
  fontSize?: 'extra-small' | 'base' | 'small' | 'large' | 'extra-large';
  fontWeight?: 'regular' | 'medium' | 'bold';
  color?: IAppColor | string;
}

const { Text: AntText } = Typography;

export const Text: React.FC<TextProps> = ({
  color = 'black100',
  fontSize = 'base',
  fontWeight = 'regular',
  children,
  className,
  ...antdProps
}) => {
  return (
    <AntText
      className={cn(
        styles.text,
        styles[fontSize],
        styles[fontWeight],
        styles[`text_color_${color}`],
        className,
      )}
      {...antdProps}
    >
      {children}
    </AntText>
  );
};
