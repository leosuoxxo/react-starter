import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './__COMPONENT_NAME__.module.scss';

export const __COMPONENT_NAME__ = ({ className }) => {
  return <div className={classnames(styles.__COMPONENT_CLASS_NAME__, className)}>__COMPONENT_NAME__</div>;
};

__COMPONENT_NAME__.propTypes = {
  className: PropTypes.string,
};
