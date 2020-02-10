import React from 'react';
import styles from './Tos.module.scss';
import { useTodoList } from 'store/todoList';
import { Button } from 'components';

export const Tos = () => {
  const [{ list }, { addTodoList, addTodoList_Success, addTodoList_Finish, addTodoList_Fail }] = useTodoList();
  const addTodoListHandler = name => {
    try {
      addTodoList();
      list.length > 10 ? addTodoList_Finish() : addTodoList_Success(name);
    } catch {
      addTodoList_Fail();
    }
  };
  return (
    <div className={styles.todoList}>
      <div>{JSON.stringify(list)}</div>
      <Button onClick={() => addTodoListHandler('test')}>click me !!!</Button>
    </div>
  );
};
