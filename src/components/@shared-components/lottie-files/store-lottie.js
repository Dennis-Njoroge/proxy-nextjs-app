import React, {useEffect, useState} from "react";
import animationData from "@/lottie/store-lottie.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });


const StoreLottie = props => {
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
        height={100}
        speed={1}
        isStopped={!isLoading}
        width={100}
        isClickToPauseDisabled={true}
    />;
}

export default StoreLottie;