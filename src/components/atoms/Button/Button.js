import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './Button.module.scss';

/**
 * Use `Button` to highlight key info with a predefined status. Easy peasy!!!!
 */
export const Button = ({ children, status, onClick, disabled }) => (
  <button disabled={disabled} className={classnames(styles.button, styles[status])} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
};

Button.defaultProps = {
  disabled: false,
  children: 'Button',
  status: 'positive',
};
