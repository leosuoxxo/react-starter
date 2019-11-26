import { useSelector, useDispatch } from 'react-redux';

const ADD_TODOLIST = 'ADD_TODOLIST';

const initState = {
  list: ['first'],
};

const action = {
  addTodoList: listName => ({
    type: ADD_TODOLIST,
    payload: { listName },
  }),
};

export const useTodoList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.todoList);

  const addTodoList = listName => dispatch(action.addTodoList(listName));

  return [
    { list }, // state
    { addTodoList }, // eventHanlder
  ];
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODOLIST: {
      const tempTodo = state.list.map(item => item);
      tempTodo.push(action.payload.listName);
      return {
        list: tempTodo,
      };
    }
    default:
      return state;
  }
};

export default reducer;
