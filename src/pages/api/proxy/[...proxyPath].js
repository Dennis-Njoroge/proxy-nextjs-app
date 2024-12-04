import axios from "axios";

const axiosInstance = axios.create({
    httpsAgent: new (require('https').Agent)({
        rejectUnauthorized: process.env.NODE_ENV === 'production'
    })
});

export default async function handler(req, res) {
    const { proxyPath, ...otherParams } = req.query;
    const backendUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${proxyPath.join('/')}`;
    console.log('HEADERS',req.headers);
    try{
        const response = await axiosInstance({
            method: req.method,
            url: backendUrl,
            headers: {
                ...req.headers,
            },
            data: req?.body,
            params: Boolean(otherParams)? otherParams : null,
        });

        res.status(response.status).json(response.data);
    }
    catch (error){
        console.log(error);
        res.status(error.response ? error.response.status : 500).json({
            error: 'An error occurred while proxying the request',
            details: error.message,
        });
    }
}
