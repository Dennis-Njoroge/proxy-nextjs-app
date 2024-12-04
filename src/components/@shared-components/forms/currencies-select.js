import {Autocomplete} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DMTTextInput from "@/components/@shared-components/forms/text-input";
import {getAutoCompleteValue} from "@/utils/helper-functions";
import {getCurrencies} from "@/redux/slices/dashboard/utils-slice";


const CurrenciesSelect = props => {
    const { onChange, label, value, required=false, error, helperText, onBlur, placeholder } = props;
    const dispatch = useDispatch();
    const { currencies } = useSelector(({utils}) => utils)
    const handleOnChange = (event, value) => {
        if (value){
            onChange(value?.currencyCode);
        }else{
            onChange(null);
        }
    }


    useEffect( () => {
        dispatch(getCurrencies())
    },[])

    return (
        <>
            <Autocomplete
                options={currencies}
                autoHighlight
                onChange={handleOnChange}
                value={getAutoCompleteValue(currencies, value, 'currencyCode')}
                getOptionLabel={(option) => option?.currencyName}
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

export default CurrenciesSelect;