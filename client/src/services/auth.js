import axiosConfig from '../axiosConfig';

export const apiRegister = async (payload) => {
  try {
    const response = await axiosConfig({
      method: 'post',
      url: '/api/v1/auth/register',
      data: payload
    });
    return response;
  } catch (error) {
    // Xử lý lỗi ở đây
    throw error;
  }
};
export const apiLogin = async (payload) => {
  try {
    const response = await axiosConfig({
      method: 'post',
      url: '/api/v1/auth/login',
      data: payload
    });
    return response;
  } catch (error) {
    // Xử lý lỗi ở đây
    throw error;
  }
};