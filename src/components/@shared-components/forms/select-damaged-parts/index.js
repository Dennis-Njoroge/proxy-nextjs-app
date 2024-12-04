import {Autocomplete, FormControl, InputLabel} from "@mui/material";
import Grid from "@mui/material/Grid";
import {getAutoCompleteValue} from "@/utils/helper-functions";
import BootstrapInput from "@/components/@shared-components/forms/bootstrap-base-input";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDamagedParts} from "@/redux/slices/dashboard/claims-slice";

const DMTSelectDamagedParts = props => {
    const {  onChange, fullWidth, name, label, options, defaultInput, field, value, required, error, onBlur, helperText, placeholder, ...other} = props;
    const dispatch = useDispatch();
    const handleOnChange = (e, value) => {
        onChange(value);
    }
    const { damagedParts } = useSelector(({ claims }) => claims );

    useEffect(() => {
        dispatch(getDamagedParts());
    },[]);


    return (
        <>
            <FormControl
                component={'div'}
                fullWidth={fullWidth}
                variant="standard"
            >
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} sm={12} md={3.5}>
                        <InputLabel shrink htmlFor={name} required={required} error={error}>
                            {label}
                        </InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8.5}>
                        <Autocomplete
                            options={damagedParts}
                            autoHighlight
                            onChange={handleOnChange}
                            value={getAutoCompleteValue(options, Number(value))}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                                <BootstrapInput
                                    {...params}
                                    label={""}
                                    required={required}
                                    error={error}
                                    name={name}
                                    onBlur={onBlur}
                                    helperText={helperText}
                                    placeholder={placeholder}
                                    size={'small'}
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'off', // disable autocomplete and autofill

                                    }}
                                    variant={'outlined'}
                                />
                            )}
                            {...other}
                        />
                    </Grid>
                </Grid>

            </FormControl>

        </>
    )
}

export default DMTSelectDamagedParts;