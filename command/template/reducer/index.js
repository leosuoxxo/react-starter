import { useSelector, useDispatch } from 'react-redux';

const ACTION_TYPE = 'ACTION_TYPE';

const initState = {
  DEFAULT_PARAMS: {},
};

const action = {
  __ACTION_NAME__: params => ({
    type: ACTION_TYPE,
    payload: { params },
  }),
};

export const __HOOK_NAME__ = () => {
  const dispatch = useDispatch();
  const { DEFAULT_PARAMS } = useSelector(state => state.__HOOK_NAME__);

  const __ACTION_NAME__ = params => dispatch(action.__ACTION_NAME__(params));

  return [
    { DEFAULT_PARAMS }, // state
    { __ACTION_NAME__ }, // eventHanlder
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
