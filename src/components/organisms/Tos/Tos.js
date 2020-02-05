import React from 'react';
import styles from './Tos.module.scss';
import { useTodoList } from 'store/todoList';
import { Button } from 'components';

export const Tos = () => {
  const [{ list }, { addTodoList }] = useTodoList();

  return (
    <div className={styles.todoList}>
      <div>{JSON.stringify(list)}</div>
      <Button onClick={() => addTodoList('test')}>click me !!!</Button>
    </div>
  );
};
