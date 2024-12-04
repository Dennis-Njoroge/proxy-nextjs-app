import React, {useEffect, useState} from "react";
import animationData from "@/lottie/404-lottie.json"

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });


const NotFoundLottie = props => {
    const { isLoading = true } = props;
    const [defaultOptions, setDefaultOptions] = useState({
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    });

    useEffect(() => {
        setDefaultOptions({
            ...defaultOptions,
            autoplay: isLoading,
        })
    },[isLoading])

    return <Lottie
        options={defaultOptions}
        height={300}
        //speed={5}
        isStopped={!isLoading}
        width={300}
        isClickToPauseDisabled={true}
    />;
}

export default NotFoundLottie;