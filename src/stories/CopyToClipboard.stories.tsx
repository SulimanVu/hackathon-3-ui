import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { CopyToClipboard } from '../components/CopyToClipboard';
import { CopyToClipboardProps } from '../components/CopyToClipboard/CopyToClipboard';

const meta: Meta = {
  title: 'General/CopyToClipboard',
  component: CopyToClipboard,
};

export default meta;

type TemplateProps = CopyToClipboardProps;

const CopyToClipboardTemplate: StoryFn<TemplateProps> = (args) => <CopyToClipboard {...args} />;

export const CopyToClipboardBase: StoryFn<TemplateProps> = CopyToClipboardTemplate.bind({});
CopyToClipboardBase.args = {
  tooltipTitle: 'Скопировть адрес',
  tooltipSuccessTitle: 'Адрес скопирован',
  textToCopy: 'Скопированный текст',
  textErrorCopy: 'Ошибка при копировании текста',
};
