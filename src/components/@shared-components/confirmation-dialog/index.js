import DMTDialog from "@/components/@shared-components/dialog";
import { Collapse, DialogActions, DialogContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import SuccessPage from "@/components/@shared-components/success-page";
import DMTTextInput from "@/components/@shared-components/forms/text-input";
import {toast} from "react-toastify";

const ConfirmationDialog = props => {
    const { open, onClose, action, onProceed, successMessage , message= "Are you sure you want to submit this claim?", onRefresh, buttonLabel= 'Check Status' } = props;
    const [isSuccess, setIsSuccess] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [reason, setReason] = useState('');
    const handleOnProceed = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const res = await onProceed(reason);
        if (res){
            setIsSuccess(true);
        }
        else{
            toast.error('Could not complete the request at the moment. Try again')
        }
        setIsLoading(false);
    }

    const handleOnContinue = async () => {
        onClose?.();
        if (isSuccess){
            await onRefresh?.()
        }
    }

    useEffect(() => {
        if(open){
            setIsSuccess(null);
        }
    },[open])

    return (
        <>
            <DMTDialog
                open={open}
                onClose={handleOnContinue}
            >
                <DialogContent sx={{ display: 'flex', gap:1, flexDirection: 'column'}}>
                    <Collapse in={Boolean(isSuccess === null)}>
                        <Typography variant={'h5'} color={'primary'} gutterBottom>
                            {"Confirmation"}
                        </Typography>
                        <Typography>
                            {message}
                        </Typography>

                        <form onSubmit={handleOnProceed}>
                            <DMTTextInput
                                label={'Comments'}
                                required
                                multiline={true}
                                minRows={4}
                                onChange={e => setReason(e.target.value)}
                                fullWidth={true}
                                id={'reason'}
                                name={'reason'}
                            />
                            <DialogActions>
                                <Button variant={'contained'} type={'submit'} disabled={isLoading} color={'primary'}>
                                    {isLoading? "Submitting..." : "Yes, Proceed "}
                                </Button>
                            </DialogActions>
                        </form>
                    </Collapse>
                    <Collapse in={Boolean(isSuccess)}>
                        {Boolean(isSuccess) && (
                            <>
                                <SuccessPage label={buttonLabel}  message={successMessage ? successMessage : `Claim has been ${action === 'approve' ? 'approved' : action === 'decline' ? 'declined' : 'approved'} successfully!`} onContinue={handleOnContinue}/>
                            </>
                        )}
                    </Collapse>

                </DialogContent>
            </DMTDialog>
        </>
    )
}

export default ConfirmationDialog;