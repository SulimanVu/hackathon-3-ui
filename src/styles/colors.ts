import colors from './colors.module.scss';

export interface IAppColors {
  /**
   * Palette colors
   */
  // Brand
  brand12: string;
  brand24: string;
  brand72: string;
  brand100: string;
  brand105: string;
  brand110: string;
  brand120: string;
  // Red
  red10: string;
  red25: string;
  red50: string;
  red75: string;
  red100: string;
  red110: string;
  red120: string;
  // Blue
  blue10: string;
  blue25: string;
  blue50: string;
  blue75: string;
  blue100: string;
  blue110: string;
  blue120: string;
  // Light Blue
  lightBlue10: string;
  lightBlue20: string;
  lightBlue40: string;
  lightBlue60: string;
  lightBlue80: string;
  lightBlue100: string;
  lightBlue120: string;
  // Green
  green10: string;
  green25: string;
  green50: string;
  green75: string;
  green100: string;
  green110: string;
  green120: string;
  // Pink
  pink10: string;
  pink20: string;
  pink40: string;
  pink60: string;
  pink80: string;
  pink100: string;
  pink120: string;
  // Purple
  purple10: string;
  purple20: string;
  purple40: string;
  purple60: string;
  purple80: string;
  purple100: string;
  purple120: string;
  // Orange
  orange15: string;
  orange25: string;
  orange45: string;
  orange65: string;
  orange80: string;
  orange100: string;
  orange120: string;
  // Yellow
  yellow15: string;
  yellow25: string;
  yellow45: string;
  yellow65: string;
  yellow80: string;
  yellow100: string;
  yellow120: string;
  // Lime
  lime15: string;
  lime25: string;
  lime45: string;
  lime65: string;
  lime80: string;
  lime100: string;
  lime120: string;
  // White
  white45: string;
  white65: string;
  white100: string;
  // Black
  black100: string;

  /**
   * Components colors
   */
  // Text
  textNeutralSecondary: string;
  textNeutralPlaceholder: string;
  textNeutralPrimary: string;
  textNeutralDisabled: string;

  // Icon
  iconNeutralPrimary: string;
}

export type IAppColor = keyof IAppColors;
export const IAppColor = Object.entries(colors)
  .map(([colorName, hexValue]) => {
    if (typeof hexValue === 'string') {
      return colorName as IAppColor;
    }
    return null;
  })
  .filter(Boolean) as IAppColor[];

export function hexToRGB(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
}

/**
 * Использование переменных из `$theme-colors` полученные с помощью экпорта из `styles/colors.scss`
 * @param color {IAppColor} Токен (ключ) цвета
 * @returns {string} Значение цвета в hex
 */
export const useColor = (color: IAppColor, opacity: number = 1) => {
  return hexToRGB(colors[color], opacity);
};
