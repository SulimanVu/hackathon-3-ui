import React, { useCallback, useState } from 'react';

import { Flex } from 'antd';

import { defaultHeaderProps } from '../PageLayout/types';

import { ActiveService, Submenu, SubmenuProps } from './ui';

import { ServiceDeclaration } from '@/types';

import styles from './Header.module.scss';

export interface HeaderProps extends Omit<SubmenuProps, 'isOpened'> {
  right: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ right, ...submenuProps }) => {
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);

  const toggleSubmenu = useCallback(() => {
    setIsSubmenuOpened((opened) => !opened);
  }, []);

  const activeService = submenuProps.services.find(
    (declaration) => declaration.name === submenuProps.activeService,
  ) as ServiceDeclaration;

  return (
    <Flex vertical className={styles.wrapper}>
      <Flex className={styles.header} align="center" justify="space-between">
        <div className={styles.left}>
          <ActiveService
            isOpened={isSubmenuOpened}
            onClick={toggleSubmenu}
            serviceDeclaration={activeService}
          />
        </div>
        <div className={styles.right}>
          {/* <UserAndNotification
            isExistNotification={true}
            onAvatarClick={onAvatarClick}
            onNotificationClick={onNotificationClick}
          /> */}
          {right}
        </div>
      </Flex>
      <Submenu isOpened={isSubmenuOpened} {...submenuProps} />
    </Flex>
  );
};

Header.defaultProps = defaultHeaderProps;
