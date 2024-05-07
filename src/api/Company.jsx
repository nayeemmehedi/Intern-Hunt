import { api } from "./MainFetch";

// Sign up API
export const jobPost = async (userData) => {
  try {
    const response = await api.post("/company/jobpost", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};






// http://localhost:4500/api/v1/company/jobList

const company = localStorage.getItem("company_id");

export const jobList = async (userData) => {
  try {
    if (company) {
      const response = await api.get(`/company/jobList/${company}`, userData);
      return response.data;
    } else {
      throw new Error("Company not found");
    }
  } catch (error) {
    throw error.response.data;
  }
};

export const showcvDetails = async (id) => {
  try {
    if (id) {
      const response = await api.get(`/company/showCvDetails/${id}`);
      return response.data;
    } else {
      throw new Error("Company not found");
    }
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteJobPost = async (id) => {
  try {
    const response = await api.delete(`/company/deleteJobPost/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const companyPermissionChange = async (value) => {
  const pending = { pending: value.pending };
  try {
    if (value.id) {
      const response = await api.patch(
        `/company/companyPermission/${value.id}`,
        pending
      );
      return response.data;
    } else {
      throw new Error("Id not found");
    }
  } catch (error) {
    throw error.response.data;
  }
};
