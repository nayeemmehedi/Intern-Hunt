import { api } from "./MainFetch";

// Sign up API
export const signUp = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login API
export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    // const { accessToken, refreshToken,pending ,role ,userEmail} = response.data;

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const googleLogin = async (idToken) => {
  try {

    const response = await api.post("/google/login", idToken);
    // const { accessToken, refreshToken,pending ,role ,userEmail} = response.data;

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};





export const CompanyInfoSignUp = async () => {
  try {
    const response = await api.get("/companyInfo");
    // const { accessToken, refreshToken,pending ,role ,userEmail} = response.data;

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Logout API
export const logout = async () => {
  try {
    await api.post("/logout");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  } catch (error) {
    throw error.response.data;
  }
};

// Example protected API call
export const fetchProtectedData = async () => {
  try {
    const response = await api.get("/protected");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
