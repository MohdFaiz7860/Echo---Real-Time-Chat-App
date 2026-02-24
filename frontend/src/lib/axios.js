import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://echo-real-time-chat-app-backend-pp0p.onrender.com/api" : "/api",
  withCredentials: true,
});
