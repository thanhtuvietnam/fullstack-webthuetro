import actionType from './actionType';
import { apiRegister } from '../../services/auth';

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    console.log(response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionType.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.REGISTER_FAIL,
      data: null,
    });
  }
};
