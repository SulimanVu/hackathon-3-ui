import React from 'react';

import styles from './styles.module.scss';

export interface GridProps extends React.PropsWithChildren {
  cols: number;
  background?: string;
}

export const Grid: React.FC<GridProps> = ({ cols, background, children }) => {
  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, background }}
    >
      {children}
    </div>
  );
};
