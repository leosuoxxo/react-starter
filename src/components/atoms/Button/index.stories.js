import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './';

export default {
  title: 'Atoms/Button',
  component: Button,
  // parameters: {
  //   componentSubtitle: '這是副標題',
  // },
  componentSubtitle: 'Handy status label',
};

export const _default = () => {
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
