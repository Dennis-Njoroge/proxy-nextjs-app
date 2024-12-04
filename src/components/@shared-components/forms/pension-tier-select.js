import {Autocomplete} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPensionTiers} from "@/redux/slices/dashboard/utils-slice";
import {getAutoCompleteValue} from "@/utils/helper-functions";
import DMTTextInput from "@/components/@shared-components/forms/text-input";

const PensionTierSelect = props => {
    const { onChange, label, value, required=false, error, helperText, onBlur, placeholder } = props;
    const dispatch = useDispatch();
    const { pensionTiers } = useSelector(({utils}) => utils)
    const handleOnChange = (event, value) => {
        if (value){
            onChange(value.tierCode);
        }else{
            onChange(null);
        }
    }


    useEffect( () => {
        dispatch(getPensionTiers())
    },[])

    return (
        <>
            <Autocomplete
                options={pensionTiers}
                autoHighlight
                onChange={handleOnChange}
                value={getAutoCompleteValue(pensionTiers, value, 'tierCode')}
                getOptionLabel={(option) => option?.tierCode}
                renderInput={(params) => (
                    <DMTTextInput
                        {...params}
                        label={label}
                        required={required}
                        error={error}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        helperText={helperText}
                        size={'small'}
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

export default PensionTierSelect;