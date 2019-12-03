import React from 'react';
import { useTodoList } from 'store/todoList';
import { Button } from 'components';

import styles from './TodoList.module.scss';

export const TodoList = () => {
  const [{ list }, { addTodoList }] = useTodoList();

  return (
    <div className={styles.todoList}>
      <div>{JSON.stringify(list)}</div>
      <Button onClick={() => addTodoList('test')}>click me !!!</Button>
    </div>
  );
};
