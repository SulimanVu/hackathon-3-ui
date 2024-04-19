import { create, InstanceComponent, InstanceProps } from 'react-modal-promise';

import { ModalProps } from '../components';

export type ModalPromiseProps<Resolve, Reject = Resolve> = InstanceProps<Resolve, Reject> &
  ModalProps;

export const openModal = <Type = any>(
  component: InstanceComponent<ModalPromiseProps<Type>>,
  props: Omit<React.ComponentProps<typeof component>, keyof InstanceProps<Type>> = {},
) => {
  const modal = create(component);
  return modal(props) as Promise<Type>;
};
