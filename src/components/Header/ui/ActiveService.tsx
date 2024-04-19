import React from 'react';

import { Flex } from 'antd';

import { Icon, ServiceIcon, Text } from '@/components';
import { classNames } from '@/helpers';
import { ServiceDeclaration } from '@/types';

import styles from './ActiveService.module.scss';

export interface ActiveServiceProps {
  serviceDeclaration: ServiceDeclaration;
  onClick?: () => void;
  isOpened?: boolean;
}

export const ActiveService: React.FC<ActiveServiceProps> = ({
  serviceDeclaration,
  onClick,
  isOpened,
}) => {
  return (
    <Flex
      className={classNames(styles.activeService, { [styles.activeService_isActive]: isOpened })}
      gap={12}
      align="center"
      onClick={onClick}
    >
      <ServiceIcon as={serviceDeclaration.iconName} className={styles.serviceIcon} />
      <Text className={styles.title}>{serviceDeclaration.title}</Text>
      <Icon as={isOpened ? 'ArrowUp' : 'ArrowDown'} size={16} />
    </Flex>
  );
};
