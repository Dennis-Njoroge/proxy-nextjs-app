export const API_METHODS = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export const API_URL = {
    /***************** TEST APIS **********************/
   CLAIMS: { endpoint: '/api/claims/fetch-claims', method: API_METHODS.POST },
   LOGIN: { endpoint: '/api/auth/login', method: API_METHODS.POST },
   CUSTOMER_IPRS: { endpoint: '/api/digital-store/fetch-iprs-results', method: API_METHODS.GET }
}