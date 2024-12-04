import {sendEncryptedRequest} from "@/services/axios-instance/encrypted-request";
import {API_URL} from "@/utils/api-endpoints";

class ClaimsApis {
    fetchClaims(values){
        return new Promise(async (resolve, reject) => {
            await sendEncryptedRequest(API_URL.CLAIMS.endpoint, API_URL.CLAIMS.method, values)
                .then(result => resolve(result.data))
                .catch(e => reject (new Error(e)))
        });
    }
    fetchCustomersIPRS(values){
        const config = {
            params: {
                customerId: values.customerId
            }
        }
        return new Promise(async (resolve, reject) => {
            await sendEncryptedRequest(API_URL.CUSTOMER_IPRS.endpoint, API_URL.CUSTOMER_IPRS.method, null,  config)
                .then(result => resolve(result.data))
                .catch(e => reject (new Error(e)))
        });
    }

}

export const claimsApis = new ClaimsApis();