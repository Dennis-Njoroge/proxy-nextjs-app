import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import animationData from "@/lottie/loading-lottie.json";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const LoadingLottie = props => {
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
        height={150}
        speed={5}
        isStopped={!isLoading}
        width={150}
        isClickToPauseDisabled={true}
    />;
}

export default LoadingLottie;