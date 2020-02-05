import React from 'react';
import { PageTemplate, Header, Footer, Tos } from 'components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <div className={styles.homePage}>
        <Tos />
      </div>
    </PageTemplate>
  );
};
