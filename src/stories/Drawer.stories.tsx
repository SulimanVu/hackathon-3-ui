import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Space } from 'antd';

import { Button, Drawer, DrawerProps } from '../components';

const meta: Meta = {
  title: 'General/Drawer',
  component: Drawer,
};

export default meta;

type TemplateProps = DrawerProps;

const Template: StoryFn<TemplateProps> = ({ ...args }) => {
  const [open, setOpen] = useState(args.open);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} {...args} />
    </>
  );
};

export const DrawerBase: StoryFn<TemplateProps> = Template.bind({});
DrawerBase.args = {
  width: '100%',
  height: '90%',
  title: 'Drawer title',
  children: 'Данные с Drawer',
  placement: 'bottom',
  extra: (
    <Space>
      <Button>Отмена</Button>
      <Button type="primary">Добавить</Button>
    </Space>
  ),
  defaultCloseIcon: true,
};
