import React from 'react';
import { CustomScroll } from 'react-custom-scroll';

import styles from './Scroll.module.scss';

type CustomScrollProps = React.ComponentProps<typeof CustomScroll>;

export interface ScrollProps extends CustomScrollProps {
  fullSized?: boolean;
}

export const Scroll: React.FC<ScrollProps> = ({ fullSized, ...scrollProps }) => {
  const fullSizedProps: CustomScrollProps = fullSized ? { flex: '1', allowOuterScroll: true } : {};

  return <CustomScroll {...fullSizedProps} className={styles.scroll} {...scrollProps} />;
};
