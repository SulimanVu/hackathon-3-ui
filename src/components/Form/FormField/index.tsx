import {
  FieldValues,
  UseControllerProps,
  useController,
  ControllerRenderProps,
} from 'react-hook-form';

import * as yup from 'yup';

export interface FormFieldFieldContext<TFieldValues extends FieldValues = FieldValues>
  extends ControllerRenderProps<TFieldValues> {
  status: 'error' | 'warning' | undefined;
}

export interface FormFieldFormItemContext {
  required: boolean;
  validateStatus?: 'success' | 'warning' | 'error';
  help?: string;
}

export interface FormFieldProps<TFieldValues extends FieldValues = FieldValues>
  extends UseControllerProps<TFieldValues> {
  schema: yup.ObjectSchema<TFieldValues>;
  children: (
    formFieldProps: FormFieldFormItemContext,
    field: FormFieldFieldContext<TFieldValues>,
  ) => React.ReactNode;
}

export const FormField = <TFieldValues extends FieldValues = FieldValues>({
  children,
  schema,
  ...controllerProps
}: FormFieldProps<TFieldValues>) => {
  const { field, fieldState } = useController(controllerProps);

  function isRequired(field: ControllerRenderProps<TFieldValues>): boolean {
    console.log(schema.fields[field.name]);
    //@ts-ignore Тут хак, чтобы вытащить из схемы обязательность поля
    return !schema.fields[field.name].spec.optional || false;
  }

  return children(
    {
      required: isRequired(field),
      help: fieldState.error?.message,
      validateStatus: fieldState.error ? 'error' : undefined,
    },
    { ...field, status: fieldState.error ? 'error' : undefined },
  );
};
