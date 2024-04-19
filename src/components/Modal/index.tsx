import React from 'react';

import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';

import { Flex, Text, Title } from '@/components';
import { classNames } from '@/helpers';

import styles from './Modal.module.scss';

export interface ModalProps extends Omit<AntdModalProps, 'open' | 'title'> {
  isOpen?: boolean;
  title?: string;
  description?: string;
  withBorders?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  description,
  withBorders,
  ...antdProps
}) => {
  return (
    <AntdModal
      {...antdProps}
      title={
        <Flex vertical className={styles.header}>
          <Title level={4} className={styles.title}>
            {title}
          </Title>
          {description && <Text className={styles.description}>{description}</Text>}
        </Flex>
      }
      open={isOpen}
      className={classNames(
        styles.modal,
        { [styles.modal_bordered]: withBorders },
        antdProps.className,
      )}
    />
  );
};
