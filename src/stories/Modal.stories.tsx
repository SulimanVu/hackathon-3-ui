import React, { useCallback, useEffect, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button, Modal, ModalProps, Text } from '../components';
import { openModal, ModalPromiseProps } from '../helpers';

const meta: Meta = {
  title: 'General/Modal',
  component: Modal,
};

export default meta;

type TemplateProps = ModalProps;

const Template: StoryFn<TemplateProps> = (args) => {
  const [isModalOpened, setIsModalOpened] = useState(args.isOpen);

  useEffect(() => {
    setIsModalOpened(args.isOpen);
  }, [args.isOpen]);

  const toggleModal = useCallback(() => {
    setIsModalOpened((isOpen) => !isOpen);
  }, []);

  return (
    <>
      <Button onClick={toggleModal}>Open modal</Button>
      <Modal
        {...args}
        isOpen={isModalOpened}
        title="Подтвердите действие"
        okText="Принять"
        cancelText="Отклонить"
        onOk={toggleModal}
        onCancel={toggleModal}
      >
        Example
      </Modal>
    </>
  );
};

export const ModalBase: StoryFn<TemplateProps> = Template.bind({
  isOpen: false,
});

interface TestPromiseModalProps extends ModalPromiseProps<{ type: 'success' | 'rejected' }> {}

const TestPromiseModal = ({ onReject, onResolve, ...modalProps }: TestPromiseModalProps) => {
  const handleOk = useCallback(() => {
    onResolve({ type: 'success' });
  }, []);

  const handleCancel = useCallback(() => {
    onReject({ type: 'rejected' });
  }, []);

  return (
    <Modal
      title="Укажите секции и этажи"
      description="Для перехода в график, необходимо указать количество секций и этажей в данном объекте"
      okText="Сохранить и перейти"
      cancelText="Отменить"
      {...modalProps}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

const TemplateWithPromise: StoryFn<ModalPromiseProps<any>> = () => {
  const handleClick = useCallback(async () => {
    try {
      const result = await openModal(TestPromiseModal);
      alert(JSON.stringify(result, null, 2));
    } catch (err) {
      alert(JSON.stringify(err, null, 2));
    }
  }, []);

  return <Button onClick={handleClick}>Open modal</Button>;
};

export const PromisifiedModal: StoryFn<ModalPromiseProps<any>> = TemplateWithPromise.bind({});

interface NestedModalProps extends ModalPromiseProps<{ name: string }> {}

const NestedModal: React.FC<NestedModalProps> = ({ onReject, onResolve, ...modalProps }) => {
  const handleOk = useCallback(() => {
    onResolve({ name: 'Jonh Doe' });
  }, []);

  const handleCancel = useCallback(() => {
    onReject(new Error('You canceled operation'));
  }, []);

  const handleClick = useCallback(async () => {
    try {
      const result = await openModal(TestPromiseModal);
      alert(JSON.stringify(result, null, 2));
    } catch (err) {
      alert(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <Modal
      title="Пример вложенных модалок"
      description="Нажми на кнопку - получишь результат =)"
      withBorders
      {...modalProps}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Button onClick={handleClick}>Открыть еще модалку</Button>
    </Modal>
  );
};

const TemplateWithNestedPromise = () => {
  const handleClick = useCallback(async () => {
    try {
      const result = await openModal(NestedModal);
      alert(JSON.stringify(result, null, 2));
    } catch (err) {
      alert(JSON.stringify(err, null, 2));
    }
  }, []);

  return <Button onClick={handleClick}>Open modal</Button>;
};

export const NestedPromisifiedModal: StoryFn<ModalPromiseProps<any>> =
  TemplateWithNestedPromise.bind({});

const TemplateBordered: StoryFn<ModalPromiseProps<any>> = () => {
  const handleClick = useCallback(async () => {
    try {
      const result = await openModal(TestPromiseModal, {
        withBorders: true,
        children: <Text>Это модалка с рамками</Text>,
      });
      alert(JSON.stringify(result, null, 2));
    } catch (err) {
      alert(JSON.stringify(err, null, 2));
    }
  }, []);

  return <Button onClick={handleClick}>Open modal</Button>;
};

export const BorderedModal: StoryFn<ModalPromiseProps<any>> = TemplateBordered.bind({});
