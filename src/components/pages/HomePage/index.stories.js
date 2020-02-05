import React from 'react';
import { HomePage } from './HomePage';
import { StorybookWithStore } from 'components';
import StoryRouter from 'storybook-react-router';
export default {
  title: 'Pages/HomePage',
  component: HomePage,
  componentSubtitle: 'Handy status label',
  decorators: [StorybookWithStore, StoryRouter()],
};
export const _default = () => {
  return <HomePage />;
};
