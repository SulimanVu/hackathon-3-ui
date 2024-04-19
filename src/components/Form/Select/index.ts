/**
 * TODO: Пока такие экспорты, т.к. api `Select` пока хватает, если нужно добавить обертку
 */
import { SelectProps } from 'antd';

export { Select } from 'antd';

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

type DefaultOptionType<ValueType = any> = SelectProps<ValueType>['options'];

export type SelectOption<ValueType = any> = ArrayElement<DefaultOptionType<ValueType>> & {
  value: ValueType;
};

export { SelectProps };
