import React from 'react';
import classnames from 'classnames';
import styles from './COMPONENT_NAME.module.scss';

export const COMPONENT_NAME = ({ className }) => {
  return <div className={classnames(styles.COMPONENT_CLASS_NAME, className)}>COMPONENT_NAME</div>;
};
