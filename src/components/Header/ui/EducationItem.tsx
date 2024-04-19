import React from 'react';

import { Flex } from 'antd';

import { Icon, Text } from '@/components';
import { EducationDeclaration } from '@/types';

import styles from './EducationItem.module.scss';

export interface EducationItemProps extends EducationDeclaration {}

export const EducationItem: React.FC<EducationItemProps> = ({
  partTitle,
  title,
  description,
  onClick,
}) => {
  return (
    <Flex className={styles.educationItem} onClick={onClick} align="center" gap={16}>
      <Flex className={styles.cover} justify="center" align="center">
        <Icon as="PlayCircle" className={styles.coverPlay} size={50} />
        <Flex vertical className={styles.coverContent}>
          <Text fontSize="small" className={styles.coverPartTitle}>
            {partTitle}
          </Text>
          <Text fontSize="base" className={styles.coverTitle}>
            {title}
          </Text>
        </Flex>
      </Flex>
      <Flex vertical>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.description}>{description}</Text>
      </Flex>
    </Flex>
  );
};
