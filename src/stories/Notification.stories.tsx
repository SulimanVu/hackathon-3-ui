import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Notification, NotificationProps } from '../components';

const meta: Meta = {
  title: 'General/Notification',
  component: Notification,
};

export default meta;

type TemplateProps = NotificationProps;

const NotificationTemplate: StoryFn<TemplateProps> = ({ status, message, description }) => {
  return (
    <>
      <Notification status={status} message={message} description={description} />
    </>
  );
};

export const NotificationBase: StoryFn<TemplateProps> = NotificationTemplate.bind({});
NotificationBase.args = {
  status: 'loading',
  message: 'This is an info message',
  description: 'This is an description message',
};
