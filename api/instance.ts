import { API_BASE_URL } from "@/utils/config";
import axios from "axios";

export const instance = axios.create({
  baseURL: API_BASE_URL || "http://localhost:8080",
  withCredentials: true,
});
