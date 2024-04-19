import React, { ComponentProps, FC, memo } from 'react';

import cn from 'classnames';

import { Input } from '../Input';

import cls from './TextArea.module.scss';

export interface TextAreaProps extends ComponentProps<typeof Input.TextArea> {
  className?: string;
}

const { TextArea: AntdTextArea } = Input;

export const TextArea: FC<TextAreaProps> = memo((props) => {
  const { className, classNames, ...antdProps } = props;

  return (
    <AntdTextArea
      className={cn(cls.textAreaWrapper, className)}
      classNames={{
        textarea: cn(cls.textArea, classNames?.textarea),
        count: cn(cls.count, classNames?.count),
      }}
      {...antdProps}
    />
  );
});
