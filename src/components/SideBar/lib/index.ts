import { MenuItem } from '../types';

export const getDefaultSelectedKey = (items: MenuItem[], pathname: string): string => {
  return (items.find((item) => item?.route === pathname)?.key as string) || '1';
};
