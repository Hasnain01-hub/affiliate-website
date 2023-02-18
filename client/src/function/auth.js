import axios from "axios";
export const baseURL = `${process.env.REACT_APP_API}/api`;

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

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
  return await axios.post(baseURL + "/auth/register", data, axiosConfig);
};
