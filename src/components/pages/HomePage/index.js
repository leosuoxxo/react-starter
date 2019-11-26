import React from 'react';
import { PageTemplate, Header, Footer, TodoList } from 'components';
import styles from './index.module.scss';

const HomePage = () => (
  <PageTemplate
    header={<Header />}
    footer={<Footer />}
  >
    <div className={styles.homePage}>
      <TodoList />
    </div>
  </PageTemplate>
);

export default HomePage;
