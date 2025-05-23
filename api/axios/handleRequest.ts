import { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie"

export const onRequest = (config: InternalAxiosRequestConfig | any): InternalAxiosRequestConfig => {
    config.headers = {
        ...config.headers,
        apikey: process.env.NEXT_PUBLIC_API_KEY
    };
    // const authToken =  Cookies.get('auth');
    // if(authToken){
    //     config.headers = {
    //         ...config.headers,
    //         Authorization: `Bearer ${token}`
    //     };
    // }
  
    return config;
};