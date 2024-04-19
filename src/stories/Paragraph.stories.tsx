import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Paragraph } from '../components';
import type { ParagraphProps } from '../components';
import { IAppColor } from '../styles';

import { Grid, WithTitle } from './utils';

const meta: Meta = {
  title: 'General/Paragraph',
  component: Paragraph,
};

export default meta;

type TemplateProps = ParagraphProps;

const Template: StoryFn<TemplateProps> = (args) => <Paragraph {...args} />;

const WithColorsTemplate: StoryFn<TemplateProps> = () => (
  <Grid cols={5} background="rgba(0, 0, 0, 0.5)">
    {IAppColor.map((IAppColor) => (
      <WithTitle key={IAppColor} titleColor="white" title={`${IAppColor} color`}>
        <Paragraph color={IAppColor}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, cumque quam a, vel
          nisi obcaecati ad aut officia nihil, asperiores iste dolorem commodi consectetur nam nulla
          veritatis nostrum. Est, harum?
        </Paragraph>
      </WithTitle>
    ))}
  </Grid>
);

export const ParagraphWithEllipsis: StoryFn<TemplateProps> = Template.bind({});
ParagraphWithEllipsis.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ellipsis: {
    rows: 4, //Колличество строк
    expandable: true, //Прогрузка текста, если он не помещается
    suffix: 'Прожолжение', //Текст который можно вставить если строка переполняется
    tooltip: { title: 'Подсказка при наведении' },
  },
};

export const ColoredParagraph: StoryFn<TemplateProps> = WithColorsTemplate.bind({});
