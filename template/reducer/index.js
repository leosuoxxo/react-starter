import { useSelector, useDispatch } from 'react-redux';

const ACTION_TYPE = 'ACTION_TYPE';

const initState = {
  DEFAULT_PARAMS: {},
};

const action = {
  ACTION_NAME: params => ({
    type: ACTION_TYPE,
    payload: { params },
  }),
};

export const HOOK_NAME = () => {
  const dispatch = useDispatch();
  const { DEFAULT_PARAMS } = useSelector(state => state.todoList);

  const ACTION_NAME = params => dispatch(action.ACTION_NAME(params));

  return [
    { DEFAULT_PARAMS }, // state
    { ACTION_NAME }, // eventHanlder
  ];
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE: {
      return {
        DEFAULT_PARAMS: { ...state },
      };
    }
    default:
      return state;
  }
};

export default reducer;
