import React, { useCallback, useEffect, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Header, HeaderProps } from '../components';
import { UserAndNotification } from '../components/Header/ui';
import { ServiceName } from '../types';

const meta: Meta = {
  title: 'Widgets/Header',
  component: Header,
};

export default meta;

type TemplateProps = HeaderProps;

const Template: StoryFn<TemplateProps> = (args) => {
  const [activeService, setActiveService] = useState<ServiceName>(args.activeService);

  useEffect(() => {
    setActiveService(args.activeService);
  }, [args.activeService]);

  const onAvatarClick = useCallback(() => {
    console.log('Avatar Click');
  }, []);

  const onNotificationClick = useCallback(() => {
    console.log('Notification Click');
  }, []);

  return (
    <Header
      {...args}
      onServiceClick={setActiveService}
      activeService={activeService}
      right={
        <UserAndNotification
          isExistNotification={true}
          onAvatarClick={onAvatarClick}
          onNotificationClick={onNotificationClick}
        />
      }
    />
  );
};

export const Primary: StoryFn<TemplateProps> = Template.bind({});
Primary.args = {
  activeService: 'intranet',
};
