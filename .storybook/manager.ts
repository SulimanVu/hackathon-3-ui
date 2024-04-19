import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'gentlemen-ui Storybook',
});

addons.setConfig({
  theme,
});
