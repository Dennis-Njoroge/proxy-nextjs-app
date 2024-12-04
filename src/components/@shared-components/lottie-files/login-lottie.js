import React from "react";
import animationData from "@/lottie/login-lottie.json"
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const LoginLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        isClickToPauseDisabled={true}
    />;
}

export default LoginLottie;