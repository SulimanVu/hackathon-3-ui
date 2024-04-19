import React from 'react';

import { ButtonProps } from 'antd';

import { Button } from '@/components/Button';
import { useCustomNotification } from '@/hooks';

type NotificationStatus = 'info' | 'success' | 'warning' | 'error' | 'loading';

export interface NotificationProps extends ButtonProps {
  status: NotificationStatus;
  message: string;
  description?: string;
  className?: string;
}

export const Notification: React.FC<NotificationProps> = ({
  status,
  message,
  description,
  className,
}) => {
  const { openNotification, contextHolder } = useCustomNotification({
    status,
    message,
    description,
    className,
  });

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={() => openNotification('top')}>
        Open the notification box
      </Button>
    </>
  );
};
