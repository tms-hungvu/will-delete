import axios, { AxiosError, AxiosResponse } from "axios";


const checkErrorRefreshToken = (error : any) => { 
    const {
        response: { status, data },
    } = error;
    return status === 401 && data.message && data.message == 'refresh_token error';
}


export const onErrorResponse = async (error: AxiosError | Error): Promise<AxiosError> => {
    
    
    if (axios.isAxiosError(error)) {

      const {  status } = error.response as AxiosResponse ?? {};
      
      const token = false;
      if(status === 403) window.location.href = "/login";
      if(status === 404) window.location.href = "/not-found";
      if (!token || status != 401) return Promise.reject(error);
      
      if(checkErrorRefreshToken(error)) return Promise.reject(error);
   
    }
  
    return Promise.reject(error);
};