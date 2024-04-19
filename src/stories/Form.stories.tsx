import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import * as yup from 'yup';

import { Form, Flex, Input, FormItem, Button, InputPassword } from '../components';
import type { FormProps } from '../components';

const meta: Meta = {
  title: 'Form/Form',
  component: Form,
};

export default meta;

type TemplateProps = FormProps<LoginForm>;

interface LoginForm {
  name: string;
  email?: string;
  password: string;
  passwordConfirmation: string;
}

const formSchema = new yup.ObjectSchema<LoginForm>({
  name: yup.string().required(),
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
    .required(),
  password: yup.string().min(8).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});

const Template: StoryFn<TemplateProps> = (args) => {
  const defaultValues: Partial<LoginForm> = {
    name: 'User',
  };

  const onSubmit = (values: LoginForm) => {
    alert(JSON.stringify(values, null, 4));
  };

  return (
    <Form
      mode="onChange"
      schema={formSchema}
      reValidateMode="onChange"
      defaultValues={args.defaultValues}
      onSubmit={onSubmit}
    >
      {({ FormField }) => {
        return (
          <Flex vertical style={{ maxWidth: 500 }}>
            <FormField name="name">
              {(formField, field) => (
                <FormItem vertical label="Имя" {...formField}>
                  <Input {...field} />
                </FormItem>
              )}
            </FormField>

            <FormField name="email">
              {(formField, field) => (
                <FormItem vertical label="Email" {...formField}>
                  <Input {...field} />
                </FormItem>
              )}
            </FormField>

            <FormField name="password">
              {(formField, field) => (
                <FormItem vertical label="Пароль" {...formField}>
                  <InputPassword {...field} />
                </FormItem>
              )}
            </FormField>

            <FormField name="passwordConfirmation">
              {(formField, field) => (
                <FormItem vertical label="Подтвердите пароль" {...formField}>
                  <InputPassword {...field} />
                </FormItem>
              )}
            </FormField>

            <Button htmlType="submit">Отправить</Button>
          </Flex>
        );
      }}
    </Form>
  );
};

export const BaseFormExample: StoryFn<TemplateProps> = Template.bind({});

BaseFormExample.args = {
  defaultValues: {},
};
