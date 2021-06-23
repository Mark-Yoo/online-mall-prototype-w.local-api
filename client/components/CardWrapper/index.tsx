import React from 'react';
import styles from './cardwrapper.module.scss';

const CardWrapper = ({ children }: any) => {
  return <div className={styles.cardwrapper}>{children}</div>;
};

export default CardWrapper;
