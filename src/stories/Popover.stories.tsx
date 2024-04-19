import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Button } from 'antd';

import { Flex, Icon, Popover, Title } from '../components';
import type { PopoverProps } from '../components';

const meta: Meta = {
  title: 'General/Popover',
  component: Popover,
};

export default meta;

type TemplateProps = PopoverProps;

const Template: StoryFn<TemplateProps> = (args) => {
  return (
    <Flex justify="center">
      <Popover placement="bottomRight" content={<div>PopoverContent</div>} {...args}>
        <Button>Btn Open Popopver</Button>
      </Popover>
    </Flex>
  );
};

export const PopoverDefault: StoryFn<TemplateProps> = Template.bind({});
PopoverDefault.args = {
  type: 'default',
  overlayStyle: {
    width: '100%',
    maxWidth: 300,
  },
  content: (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam itaque deleniti
      molestias voluptas? Commodi voluptatem sed, fuga atque similique nam, vitae quo beatae dicta,
      velit vero voluptatibus. Nisi, magni.
    </div>
  ),
};

export const PopoverPrimary: StoryFn<TemplateProps> = Template.bind({});
PopoverPrimary.args = {
  type: 'primary',
  overlayStyle: {
    width: '100%',
    maxWidth: 300,
  },
  subContent: (
    <Flex gap={4}>
      <Button icon={<Icon as="TableTrash" size={14} />} />
      <Button icon={<Icon as="EditPencil" size={14} />} />
    </Flex>
  ),
  content: (
    <Flex vertical>
      <Title level={3}>Title</Title>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam itaque deleniti
        molestias voluptas? Commodi voluptatem sed, fuga atque similique nam, vitae quo beatae
        dicta, velit vero voluptatibus. Nisi, magni.
      </p>
    </Flex>
  ),
};
