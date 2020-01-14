import React from 'react';
import { action } from '@storybook/addon-actions';
import { specs } from 'storybook-addon-specifications';
import Button from './';
import { tests } from './Button.test';

export default {
  title: 'Atoms/Button',
  component: Button,
  // parameters: {
  //   componentSubtitle: '這是副標題',
  // },
  componentSubtitle: 'Handy status label',
};

export const _default = () => {
  specs(() => tests);
  return <Button />;
};

export const error = () => (
  <Button status="error" onClick={action('clicked')}>
    error
  </Button>
);

export const warning = () => (
  <Button status="warning" onClick={action('clicked')}>
    error
  </Button>
);
