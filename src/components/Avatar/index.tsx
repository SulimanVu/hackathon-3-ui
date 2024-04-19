import React, { FC, memo } from 'react';

import { Avatar as AntdAvatar, AvatarProps as AtndAvatarProps } from 'antd';
import cn from 'classnames';

import cls from './Avatar.module.scss';

export type AvatarSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export interface AvatarProps extends Omit<AtndAvatarProps, 'size'> {
  className?: string;
  size?: AvatarSize;
  showOnline?: boolean;
  isOnline?: boolean;
}

export const Avatar: FC<AvatarProps> = memo((props) => {
  const { className, size = 's', showOnline = false, isOnline = false, ...antdProps } = props;

  const mods = {
    [cls[`size_${size}`]]: true,
  };

  return (
    <div className={cn(cls.AvatarWrapper, mods, className)}>
      <AntdAvatar className={cn(cls.avatar)} {...antdProps} />
      {showOnline && <div className={cn(cls.onlineIndicator, { [cls.active]: isOnline })} />}
    </div>
  );
});
