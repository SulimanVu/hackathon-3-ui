import React, { ReactNode } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { Icon } from '@/components';

type NotificationStatus = 'info' | 'success' | 'warning' | 'error' | 'loading';

export const useNotificationIcon = (status: NotificationStatus): ReactNode => {
  switch (status) {
    case 'info':
      return <Icon as={'MessageInfo'} />;
    case 'success':
      return <Icon as={'MessageSuccess'} />;
    case 'warning':
      return <Icon as={'MessageWarning'} />;
    case 'error':
      return <Icon as={'MessageError'} />;
    case 'loading':
      return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;
    default:
      return null;
  }
};
