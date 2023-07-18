import axios from "axios";
//import jwt_decode from "jwt-decode";
//import "dayjs/locale/es";

const BASE_URL = "http://localhost:8000/v2/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": true,
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
