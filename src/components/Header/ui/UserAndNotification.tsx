import React from 'react';

import { Flex } from 'antd';

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';

import styles from './UserAndNotification.module.scss';


const testImg =
  'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface UserAndNotificationProps {
  isExistNotification: boolean;
  onNotificationClick: () => void;
  onAvatarClick: () => void;
}

export const UserAndNotification: React.FC<UserAndNotificationProps> = ({
  isExistNotification,
  onNotificationClick,
  onAvatarClick,
}) => {
  return (
    <Flex gap="15px">
      <Button
        onClick={onNotificationClick}
        type="text"
        icon={isExistNotification ? <Icon as="NotificationNew" /> : <Icon as="Notification" />}
        className={styles.notification}
      ></Button>
      <Avatar onClick={onAvatarClick} src={testImg} />
    </Flex>
  );
};
