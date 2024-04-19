import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { StatusTag , IProjectStatusEnum, StatusTagProps } from '../components';
import { IProjectStatus } from '../components/StatusTag';

import { VerticalList } from './utils';

const meta: Meta = {
  title: 'General/StatusTagProject',
  component: StatusTag,
};

export default meta;

type TemplateProps = StatusTagProps;

const projectStatuses: { projectStatus: IProjectStatus }[] = [
  { projectStatus: 'draft' },
  { projectStatus: 'agreed' },
  { projectStatus: 'completed' },
  { projectStatus: 'inProgress' },
  { projectStatus: 'notes' },
  { projectStatus: 'rejected' },
];

const Template: StoryFn<TemplateProps> = (args) => (
  <VerticalList align="middle">
    {projectStatuses.map((status) => (
      <StatusTag key={status.projectStatus} size="middle" status={status.projectStatus} {...args}>
        {IProjectStatusEnum[status.projectStatus]}
      </StatusTag>
    ))}
  </VerticalList>
);

export const ProjectStatus: StoryFn<TemplateProps> = Template.bind({});
