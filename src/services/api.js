import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_BASE_URL
});

export default api;