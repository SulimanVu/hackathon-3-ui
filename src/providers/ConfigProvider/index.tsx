import React from 'react';

import {
  ConfigProvider as AntdConfigProvider,
  ConfigProviderProps as AntdConfigProviderProps,
} from 'antd';
import ru from 'antd/locale/ru_RU';

import { theme } from '../../components';
import { ModalsProvider } from '../ModalsProvider';
import 'dayjs/locale/ru';

export interface ConfigProviderProps extends Omit<AntdConfigProviderProps, 'theme'> {}

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children, ...antdProps }) => {
  return (
    <AntdConfigProvider locale={ru} theme={theme} {...antdProps}>
      {children}
      <ModalsProvider />
    </AntdConfigProvider>
  );
};
