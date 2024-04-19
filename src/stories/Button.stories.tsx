import React from "react";

import { Meta, StoryFn } from "@storybook/react";
import { SizeType } from "antd/es/config-provider/SizeContext";

import { Button } from "../components";
import type { ButtonProps } from '../components';

import { VerticalList } from "./utils";

const meta: Meta = {
  title: "General/Button",
  component: Button,
};

export default meta;

type TemplateProps = ButtonProps;

const sizes: SizeType[] = ['small', 'middle', 'large'];

const Template: StoryFn<TemplateProps> = (args) => <VerticalList align="middle">
  {sizes.map((size) => <Button key={size} size={size} {...args}>{args.children} {size}</Button>)}
</VerticalList>;

export const PrimaryButton: StoryFn<TemplateProps> = Template.bind({});
PrimaryButton.args = {
  type: 'primary',
  children: "Primary button",
};

export const PrimaryDisabledButton: StoryFn<TemplateProps> = Template.bind({});
PrimaryDisabledButton.args = {
  type: "primary",
  disabled: true,
  children: "Primary default button",
};

export const PrimaryTestButton: StoryFn<TemplateProps> = Template.bind({});
PrimaryTestButton.args = {
  type: "text",
  children: "Text button",
};

export const DefaultButton: StoryFn<TemplateProps> = Template.bind({});
DefaultButton.args = {
  type: "default",
  children: "Default button",
};

export const DefaultDisabledButton: StoryFn<TemplateProps> = Template.bind({});
DefaultDisabledButton.args = {
  type: "default",
  disabled: true,
  children: "Default disabled button",
};