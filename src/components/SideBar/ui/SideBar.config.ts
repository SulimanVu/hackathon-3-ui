import { AntdComponentConfig } from '@/types';

export const SideBarConfig: AntdComponentConfig<'Menu'> = {
  itemMarginBlock: 8, // вертикальные margin-ы у элементов меню
  itemMarginInline: 0, // горизонтальные margin-ы у элементов меню
  itemSelectedBg: 'rgba(190, 152, 65, 0.12)',
  itemSelectedColor: '#99752C',
  // itemColor: "#BE9841",  // цвет текста элементов меню
  collapsedWidth: 40, // ширина Menu в сжатом состоянии
};
