import React from 'react';
import { useTodoList } from 'store/todoList';
import { Button } from 'components';

import styles from './TodoList.module.scss';

export const TodoList = () => {
  const [{ list }, { addTodoList, addTodoList_Success, addTodoList_Fail }] = useTodoList();
  const addTodoListHandler = name => {
    addTodoList();
    list.length <= 10 ? addTodoList_Fail() : addTodoList_Success(name);
  };
  return (
    <div className={styles.todoList}>
      <div>{JSON.stringify(list)}</div>
      <Button onClick={() => addTodoList_Success('test')}>click me !!!</Button>
    </div>
  );
};
