import {API_URL} from "@/utils/api-endpoints";
import JwtHelper from "@/utils/jwt-helper";
import {sendEncryptedRequest} from "@/services/axios-instance/encrypted-request";

class AuthApis{
    async login (values) {
        return new Promise(async (resolve, reject) => {
            await sendEncryptedRequest(API_URL.LOGIN.endpoint, API_URL.LOGIN.method, values)
                .then(result => resolve(result.data))
                .catch(e => reject (new Error(e)))
        });
    };
    async decodeToken(accessToken) {
        return new Promise((resolve, reject) => {
            try {
                const jwt = new JwtHelper()
                const decodedToken  = jwt.decodeToken(accessToken);
                resolve(decodedToken);
            } catch (err) {
                reject(new Error("Internal server error"));
            }
        });
    }

    async validateOTP(values){
        return new Promise(async (resolve, reject) => {
            await sendEncryptedRequest(API_URL.CLAIMS.endpoint, API_URL.CLAIMS.method, values)
                .then(result => resolve(result.data))
                .catch(e => reject (new Error(e)))
        });
    }

    async resendOTP(values){
        return new Promise(async (resolve, reject) => {
            await sendEncryptedRequest(API_URL.CLAIMS.endpoint, API_URL.CLAIMS.method, values)
                .then(result => resolve(result.data))
                .catch(e => reject (new Error(e)))
        });
    }


}

export const authApi = new AuthApis();