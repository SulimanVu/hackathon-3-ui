import React from 'react';

import { Flex } from 'antd';

import { ServiceIcon } from '@/components/ServiceIcon';
import { Text } from '@/components/Text';
import { Title } from '@/components/Title';
import { classNames } from '@/helpers';
import { useColor } from '@/styles';
import { ServiceDeclaration } from '@/types';

import styles from './Submenu.module.scss';

export interface SubmenuServiceProps extends ServiceDeclaration {
  isActive: boolean;
  onClick?: () => void;
}

export const SubmenuService: React.FC<SubmenuServiceProps> = ({
  isActive,
  iconName,
  title,
  description,
  onClick,
}) => {
  return (
    <Flex
      onClick={onClick}
      className={classNames(styles.service, { [styles.serviceActive]: isActive })}
    >
      <ServiceIcon
        as={iconName}
        className={styles.serviceIcon}
        color={isActive ? useColor('brand100') : undefined}
      />
      <Flex vertical>
        <Title className={styles.serviceTitle} level={5}>
          {title}
        </Title>
        <Text className={styles.serviceDescription}>{description}</Text>
      </Flex>
    </Flex>
  );
};
