import axios from "axios";
import {AUTH_REFRESH_TOKEN_KEY, AUTH_TOKEN_KEY} from "@/utils/constants";

export const axiosInstance = axios.create({
    baseURL:  process.env.NEXT_PUBLIC_BASE_PATH
});


axiosInstance.interceptors.request.use(async (request) => {
    let token = typeof window !== 'undefined' ? localStorage?.getItem(AUTH_TOKEN_KEY) : null;
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});

axiosInstance.interceptors.response.use(async (response) => {
    return response;
},  (error) => {
    if (error.response.status === 401){
        //localStorage.removeItem(AUTH_TOKEN_KEY);
        //localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
        //window.location.href = process.env.NEXT_PUBLIC_BASE_PATH;
    }
    if (error.response?.data?.message){
        console.log(error)
        //toast.error(error.response?.data?.message);
    }
    return Promise.reject(error)
});
