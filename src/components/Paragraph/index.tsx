import React from 'react';

import { Typography } from 'antd';
import cn from 'classnames';

import { IAppColor } from '@/styles';

import styles from './paragraph.module.scss';

export interface ParagraphProps
  extends Omit<React.ComponentProps<typeof Typography.Paragraph>, 'color'> {
  fontSize?: 'base' | 'small' | 'large' | 'extra-large';
  fontWeight?: 'regular' | 'medium' | 'bold';
  color?: IAppColor | string;
}

const { Paragraph: AntParagraph } = Typography;

export const Paragraph: React.FC<ParagraphProps> = ({
  color = 'black100',
  fontSize = 'base',
  fontWeight = 'regular',
  children,
  className,
  ...antdProps
}) => {
  return (
    <AntParagraph
      className={cn(
        styles.paragraph,
        styles[fontSize],
        styles[fontWeight],
        styles[`paragraph_color_${color}`],
        className,
      )}
      {...antdProps}
    >
      {children}
    </AntParagraph>
  );
};
