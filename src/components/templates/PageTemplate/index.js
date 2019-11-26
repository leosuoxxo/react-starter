import React from 'react';
import styles from './index.module.scss';

const PageTemplate = ({ header, children, footer }) => (
  <div className={styles.pageTemplate}>
    <header>{header}</header>
    <section>{children}</section>
    <footer>{footer}</footer>
  </div>
);

export default PageTemplate;
