import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Button = ({ children, ...otherProps }) => (
  <button className={styles.button} {...otherProps}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
