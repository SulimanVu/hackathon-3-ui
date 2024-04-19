import React from 'react';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  UseFormProps,
} from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FormField, FormFieldProps } from '../FormField';

export type FieldValues = Record<string, any>;

export interface FormChildrenContext<TFieldValues extends FieldValues = FieldValues> {
  FormField: React.ComponentType<Omit<FormFieldProps<TFieldValues>, 'schema'>>;
  FormListField: any;
}

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends UseFormProps<TFieldValues> {
  children: (context: FormChildrenContext<TFieldValues>) => React.ReactNode;
  // Обработчик отправки данных формы
  onSubmit: SubmitHandler<TFieldValues>;
  // Схема `yup` для валидации
  schema: yup.ObjectSchema<TFieldValues>;
  // Обработчик ошибки (когда форма не может быть отправлена)
  onInvalid?: SubmitErrorHandler<TFieldValues>;
}

export const Form = <TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit,
  onInvalid,
  schema,
  ...useFormProps
}: FormProps<TFieldValues>) => {
  const formProps = useForm<TFieldValues>({
    ...useFormProps,
    resolver: yupResolver<TFieldValues>(schema) as any,
  });

  const { handleSubmit } = formProps;

  const FormListField = () => null;

  const childrenContext: FormChildrenContext<TFieldValues> = {
    FormField: (props) => <FormField schema={schema} {...props} />,
    FormListField,
  };

  return (
    <FormProvider {...formProps}>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>{children(childrenContext)}</form>
    </FormProvider>
  );
};
