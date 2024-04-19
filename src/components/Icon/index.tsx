import React, { memo } from 'react';

import AntdIcon from '@ant-design/icons';

import * as icons from './icons';

import { classNames } from '@/helpers';
import { IAppColor, useColor } from '@/styles';

import styles from './Icon.module.scss';

type SvgComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type IconName = keyof typeof icons;

export interface IconProps
  extends Omit<React.ComponentProps<typeof AntdIcon>, 'name' | 'as' | 'component'> {
  as: IconName | SvgComponent;
  themeColor?: IAppColor;
}

export const Icon: React.FC<IconProps> = memo(({ as, size, color, themeColor, ...antdProps }) => {
  const component: SvgComponent = typeof as === 'string' ? icons[as] : as;

  return (
    <AntdIcon
      component={component}
      {...antdProps}
      style={{
        fontSize: size,
        color: themeColor ? useColor(themeColor) : color,
        ...antdProps.style,
      }}
      className={classNames(styles.icon, antdProps.className)}
    />
  );
});

Icon.defaultProps = {
  size: 24,
};

export { icons };
