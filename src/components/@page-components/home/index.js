import {useEffect, useState} from "react";
import {claimsApis} from "@/services/claims";

const Home = () => {
    const [claims, setClaims] = useState([]);

    const getAllClaims = async () => {
        try{
            const formData = { data: {
                    "claimStatus": null,
                    "shopId": null,
                    "idnumber": null,
                    "phonenumber": null,
                    "datefrom": null,
                    "dateto": null,
                    "claimRefNumber": null,
                    "imeiNumber": null,
                    "skip": 1,
                    "take": 10
                }}
           const res = await claimsApis.fetchClaims(formData);
           setClaims(res.result);
        }
        catch (e) {
            console.log(e.message);
        }
    }

    const getCustomerIPRS = async () => {
        try{
            const response = await claimsApis.fetchCustomersIPRS({ customerId: 20124});
            console.log(response);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAllClaims();
        getCustomerIPRS();
    },[])
    return (
        <div>
            {claims.map((claim, index) => (
                <p key={index}>
                    {claim.claimRefNumber}
                </p>
            ))}
        </div>
    )
}

export default Home;