import React from 'react';
import TodoList from './';
import { StorybookWithStore } from 'components';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Organisms/TodoList',
  component: TodoList,
  componentSubtitle: 'Handy status label',
  decorators: [StorybookWithStore, StoryRouter()],
};

export const _default = () => {
  return <TodoList />;
};
