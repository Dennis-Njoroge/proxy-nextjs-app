import {toast} from "react-toastify";
import {useAuth} from "@/hooks/use-auth";
import {INACTIVITY_TIMEOUT} from "@/utils/constants";
import useIdleTimer from "@/hooks/use-idle-timer";

const IdleTimerGuard = () => {
    const auth = useAuth();
    const handleOnIdle = async () => {
        await auth.logout();
        toast.error('You have been logged out due to long inactivity period');
    }

    const {showWarning, remainingTime} = useIdleTimer({timeout: INACTIVITY_TIMEOUT,  onIdle: handleOnIdle});

    console.log(remainingTime);

    return null;
}

export default IdleTimerGuard;