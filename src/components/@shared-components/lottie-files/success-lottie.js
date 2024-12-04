import React from "react";
import animationData from "@/lottie/success-lottie.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });


const SuccessLottie = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        speed={0.8}
        isClickToPauseDisabled={true}
    />;
}

export default SuccessLottie;