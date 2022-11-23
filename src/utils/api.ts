import Axios from "axios";
import config from "../_config";

const axios = Axios.create({
  baseURL: config.apiUrl,
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.response.use(
  (response) => response.data,
  async (err) => {
    console.error(err);
    return Promise.reject(err);
  }
);

export default axios;
