import axios from "axios";
import { getToken } from "../services/auth";

const api = axios.create({
  // baseURL: process.env.REACT_APP_URL_API,
  baseURL: "http://localhost:8081",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
