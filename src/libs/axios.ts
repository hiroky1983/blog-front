import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});
