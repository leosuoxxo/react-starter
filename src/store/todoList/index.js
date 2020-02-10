import { useSelector, useDispatch } from 'react-redux';

const ADD_TODOLIST = 'ADD_TODOLIST';
const ADD_TODOLIST_SUCCESS = 'ADD_TODOLIST_SUCCESS';
const ADD_TODOLIST_FINISH = 'ADD_TODOLIST_FINISH';
const ADD_TODOLIST_FAIL = 'ADD_TODOLIST_FAIL';

const initState = {
  list: ['first'],
  loading: false,
};

const action = {
  addTodoList: () => ({
    type: ADD_TODOLIST,
  }),
  addTodoList_Success: listName => ({
    type: ADD_TODOLIST_SUCCESS,
    payload: { listName },
  }),
  addTodoList_Finish: () => ({
    type: ADD_TODOLIST_FINISH,
  }),
  addTodoList_Fail: () => ({
    type: ADD_TODOLIST_FAIL,
  }),
};

export const useTodoList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.todoList);

  const addTodoList = () => dispatch(action.addTodoList());
  const addTodoList_Success = listName => dispatch(action.addTodoList_Success(listName));
  const addTodoList_Finish = () => dispatch(action.addTodoList_Finish());
  const addTodoList_Fail = () => dispatch(action.addTodoList_Fail());

  return [
    { list }, // state
    { addTodoList, addTodoList_Success, addTodoList_Finish, addTodoList_Fail }, // eventHanlder
  ];
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODOLIST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_TODOLIST_SUCCESS: {
      const tempTodo = state.list.map(item => item);
      tempTodo.push(action.payload.listName);
      return {
        ...state,
        list: tempTodo,
      };
    }
    case ADD_TODOLIST_FINISH: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_TODOLIST_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
