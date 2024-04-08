import axiosConfig from '../axiosConfig';

export const apiGetPosts = async () => {
  try {
    const response = await axiosConfig({
      method: 'get',
      url: '/api/v1/post/all',
    });
    return response;
  } catch (error) {
    // Xử lý lỗi ở đây
    throw error;
  }
};
