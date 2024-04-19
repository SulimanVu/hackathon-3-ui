import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';

import { useNotificationIcon } from './useNotificationIcon';

type NotificationStatus = 'info' | 'success' | 'warning' | 'error' | 'loading';

export interface UseNotificationParams {
  status: NotificationStatus;
  message: string;
  description?: string;
  className?: string;
}

// Хук позволяет вызывать нотификашку при любых дейсвтиях
export const useCustomNotification = ({
  status,
  message,
  description,
  className,
}: UseNotificationParams) => {
  const [api, contextHolder] = notification.useNotification();

  const icon = useNotificationIcon(status);

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message,
      description,
      placement,
      icon,
      className,
      duration: 0,
    });
  };

  return { openNotification, contextHolder };
};
