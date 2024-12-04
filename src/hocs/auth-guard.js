import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useCallback } from "react";
import {useAuth} from "@/hooks/use-auth";
import IdleTimerGuard from "@/hocs/idle-timer-guard";

export const AuthGuard = (props) => {
    const { children } = props;
    const auth = useAuth();
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    const initiliaze = useCallback(() => {
        if (!router.isReady) {
            return( <></>);
        }

        if (!auth.isAuthenticated) {
            router
                .push({
                    pathname: "/",
                    // query: { returnUrl: router.asPath },
                })
                .catch(console.error);
                 
        } else {
            setChecked(true);
        }
    },[router.isReady])

    useEffect(
        () => {
          initiliaze()
        },
        [router.isReady]
    );

    if (!checked) {
        return null;
    }

    return (<>
        <IdleTimerGuard/>
        {children}
        </>
    );
};

AuthGuard.propTypes = {
    children: PropTypes.node,
};
