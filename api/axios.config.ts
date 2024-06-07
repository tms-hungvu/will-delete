import  axios from "axios";

import { setupInterceptors } from "./axios/setupInterceptors";

const axiosInstance = axios.create();
export const axiosClient = setupInterceptors(axiosInstance);