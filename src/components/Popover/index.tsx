import React, { FC, ReactNode, memo } from 'react';

import { PopoverProps as AtndPopoverProps, Popover as AntdPopover, Flex } from 'antd';

import { classNames as cn } from '@/helpers';

import styles from './Popover.module.scss';

export interface PopoverProps extends AtndPopoverProps {
  type?: 'default' | 'primary';
  subContent?: ReactNode;
}

export const Popover: FC<PopoverProps> = memo((props) => {
  const { type = 'default', overlayClassName, content, subContent, ...otherProps } = props;

  const contentElement = typeof content === 'function' ? content() : content;

  const mods = {
    [styles[type]]: true,
  };

  return (
    <AntdPopover
      overlayClassName={cn(styles.Popover, mods, overlayClassName)}
      content={
        <Flex className={styles.PopoverContent}>
          {type === 'primary' && <div className={styles.subContent}>{subContent}</div>}
          <div className={styles.content}>{contentElement}</div>
        </Flex>
      }
      {...otherProps}
    />
  );
});
