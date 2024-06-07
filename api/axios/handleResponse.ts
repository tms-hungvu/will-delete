import { AxiosResponse } from "axios";

export const onResponse = (response: AxiosResponse): AxiosResponse => {
    if (response && response.data) {
        return response.data;
    }
    return response;
};