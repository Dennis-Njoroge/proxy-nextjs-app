import {axiosInstance} from "@/services/axios-instance/index";
import {API_METHODS} from "@/utils/api-endpoints";
import {encryptData} from "@/utils/encrypt-decrypt";

export const sendEncryptedRequest = async (apiPath, method = API_METHODS.POST, data, config = {}) => {
    const encryptedPayload = encryptData(data);
    let headers = {
        'Content-Type': 'application/json',
    }
    if (config?.headers) {
        headers = {
            ...headers,
            ...config.headers
        }
    }

    return  axiosInstance({
        method: method,
        url: `/api/proxy${apiPath}`,
        headers,
        data: method === API_METHODS.POST  || method === API_METHODS.PUT ? encryptedPayload : null,
        params: Boolean(config?.params) ? {...config?.params } : null
    });
};