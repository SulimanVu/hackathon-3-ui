import React from 'react';

import { Flex } from 'antd';

import { Icon, IconProps } from '../Icon';

import { classNames } from '@/helpers';
import { useColor } from '@/styles';

import styles from './ServiceIcon.module.scss';

export interface ServiceIconProps extends IconProps {}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ className, ...iconProps }) => {
  return (
    <Flex align="center" justify="center" className={classNames(styles.serviceIcon, className)}>
      <Icon
        size={18}
        color={useColor('iconNeutralPrimary')}
        {...iconProps}
        className={styles.icon}
      />
    </Flex>
  );
};
