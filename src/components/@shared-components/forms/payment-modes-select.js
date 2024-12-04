import {Autocomplete} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DMTTextInput from "@/components/@shared-components/forms/text-input";
import {getAutoCompleteValue} from "@/utils/helper-functions";
import {getPaymentModes} from "@/redux/slices/dashboard/utils-slice";

const PaymentModesSelect = props => {
    const { onChange, label, value, required=false, error, helperText, onBlur, placeholder } = props;
    const dispatch = useDispatch();
    const { paymentModes } = useSelector(({utils}) => utils)
    const handleOnChange = (event, value) => {
        if (value){
            onChange(value?.name);
        }else{
            onChange(null);
        }
    }


    useEffect( () => {
        dispatch(getPaymentModes())
    },[])

    return (
        <>
            <Autocomplete
                options={paymentModes}
                autoHighlight
                onChange={handleOnChange}
                value={getAutoCompleteValue(paymentModes, value, 'name')}
                getOptionLabel={(option) => option?.longtext}
                renderInput={(params) => (
                    <DMTTextInput
                        {...params}
                        label={label}
                        required={required}
                        error={error}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        size={'small'}
                        helperText={helperText}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'off', // disable autocomplete and autofill

                        }}
                    />
                )}
            />
        </>
    )
}

export default PaymentModesSelect;