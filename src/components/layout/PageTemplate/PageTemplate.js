import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTemplate.module.scss';

export const PageTemplate = ({ header, children, footer }) => (
  <div className={styles.pageTemplate}>
    <header>{header}</header>
    <section>{children}</section>
    <footer>{footer}</footer>
  </div>
);

PageTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any,
};
