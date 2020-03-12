import axios from "axios";

export const axiosAuth = () => {
  const API_URL = `https://safe-oasis-40439.herokuapp.com/`;

  return axios.create({
    baseURL: `${API_URL}`,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export default axiosAuth;
