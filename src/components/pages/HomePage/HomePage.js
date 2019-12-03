import React from 'react';
import { PageTemplate, Header, Footer, TodoList } from 'components';
import styles from './HomePage.module.scss';

export const HomePage = () => (
  <PageTemplate header={<Header />} footer={<Footer />}>
    <div className={styles.homePage}>
      <TodoList />
    </div>
  </PageTemplate>
);
