import actionType from './actionType';
import { apiGetPosts } from '../../services/post';


export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    console.log(response)

    if (response?.data.err === 0) {
      dispatch({
        type: actionType.GET_POSTS,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionType.REGISTER_FAIL,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_POSTS,
      posts: null,
    });
  }
};