import axios from "axios";
export const baseURL = "http://localhost:8000/api";

export const currentUser = async (authtoken) => {
  return await axios.get(baseURL + "/auth/current_user", {
    headers: {
      authtoken,
    },
  });
};

export const loginUser = async (email, password) => {
  return await axios.post(baseURL + "/auth/login", { email, password });
};

export const registerUser = async (data) => {
  return await axios.post(baseURL + "/auth/register", data);
};
