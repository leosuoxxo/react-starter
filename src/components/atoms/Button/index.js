import React from 'react';
import styles from './index.module.scss';

const Button = ({ children, ...otherProps }) => (
  <button className={styles.button} {...otherProps}>{children}</button>
);

export default Button;
