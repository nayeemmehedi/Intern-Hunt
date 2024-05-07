import { api, api2 } from "./MainFetch";

export const totalJob = async ({ searchTerm = '', page = 1, limit = 10 }) => {
  try {
    const response = await api.get(`/company/totalJob?searchTerm=${searchTerm}&page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};




export const singleJob = async (id) => {
  try {
    const response = await api.get(`/company/singleJobDetails/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const applyForm = async (formdata) => {
  try {
    const response = await api2.post(`/intern/intern_apply_form`, formdata);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logOut = async () => {
  const refreshtoken = localStorage.getItem("refreshToken");

  try {
    const response = await api.post(`/logout`, { refreshToken: refreshtoken });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
