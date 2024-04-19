import { ThemeConfig } from 'antd';

import { ButtonConfig } from './Button/Button.config';
import { SideBarConfig } from './SideBar/ui/SideBar.config';

import '@/styles/fonts.scss';
import { useColor } from '@/styles';

const themeComponents: ThemeConfig['components'] = {
  Button: ButtonConfig,
  Menu: SideBarConfig
};

const themeToken: ThemeConfig['token'] = {
  // Тут  можно выставлять основные настройки темы, чтобы не менять в
  // каждом компоненте одни и те же стили/свойства
  colorPrimary: useColor('brand100'),
  fontFamily: `'TT Dogma', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
};

export const theme: ThemeConfig = {
  cssVar: false,
  hashed: false,
  token: themeToken,
  components: themeComponents,
};
