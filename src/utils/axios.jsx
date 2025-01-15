import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://resident-spoonbill-lunamoez-2f219e89.koyeb.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
