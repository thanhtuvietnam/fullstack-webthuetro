import actionTypes from '../actions/actionType';

const initState = {
  isLoggedIn: false,
  token: null,
  msg: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: true,
        msg: action.data,
        token: null,
      };
    default:
      return state;
  }
};
export default authReducer;
