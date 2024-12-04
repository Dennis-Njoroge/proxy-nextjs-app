import {DatePicker} from "@mui/x-date-pickers";
import moment from "moment";
import { FormControl, InputLabel} from "@mui/material";
import Grid from "@mui/material/Grid";
import DMTTextInput from "@/components/@shared-components/forms/text-input";


const getMaxYear = (years) => {
    if (years){
        return new Date(moment().subtract(parseInt(years), 'years').calendar());
    }
}

export const calculateAge = (date) => {
    if (date){
        return new moment().diff(moment(date, "DD MMM YYYY"), 'years');
    }
    return null;
}

const DMTDatePicker = props => {
    const { label, value, name, fullWidth, onChange, maxYears, minYears, showAge, defaultInput = false, error = false, required, disableFuture, ...other} = props;
    const age =  calculateAge(value);
    const maxDate = getMaxYear(maxYears);
    const minDate = getMaxYear(minYears);
    const handleOnChange = (newValue) => {
        onChange(newValue);
    }

    if (defaultInput){
        return (
            <DatePicker
                format="dd/MM/yyyy"
                maxDate = {maxDate}
                minDate={minDate}
                disableFuture={disableFuture}
                value={value !=='' ? value : null}
                onChange={handleOnChange}
                slotProps={{
                    textField: props =>
                        <DMTTextInput {...{...props, error, name, required, label: label, ...other}}/>,
                }}
            />
        )
    }

    return (
        <>
            <FormControl
                component={'div'}
                fullWidth={fullWidth}
                variant="standard"
            >
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} sm={12} md={12}>
                        <InputLabel shrink htmlFor={name} required={required} error={error}>
                            {label}
                        </InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <DatePicker
                            format="dd/MM/yyyy"
                            maxDate = {maxDate}
                            minDate={minDate}
                            disableFuture={disableFuture}
                            value={value !=='' ? value : null}
                            onChange={handleOnChange}
                            slotProps={{
                                textField: props =>
                                    <DMTTextInput {...{...props, error, name, required, label: label, fullWidth, ...other}}/>,
                            }}
                            // slotProps={{
                            //     textField: {
                            //         error,
                            //         name,
                            //         required,
                            //         ...other,
                            //     }
                            // }}
                        />
                    </Grid>
                </Grid>
            </FormControl>


        </>
    )
}

export default DMTDatePicker;