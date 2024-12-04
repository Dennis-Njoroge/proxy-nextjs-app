import CurrencyFormat from "react-currency-format";
import {FormControl,InputLabel} from "@mui/material";
import Grid from "@mui/material/Grid";
import BootstrapInput from "@/components/@shared-components/forms/bootstrap-base-input";
import DMTTextInput from "@/components/@shared-components/forms/text-input";

const DMTCurrencyInput = props => {
    const {label, fullWidth, name, value, onChange, required, prefix = 'Kes ', defaultInput = true, error, onBlur, helperText, ...other } = props;

    if (Boolean(defaultInput)){
        return(
            <CurrencyFormat
                value={value}
                name={name}
                allowNegative={false}
                onValueChange={onChange}
                //isNumericString={true}
                decimalScale={0}
                thousandSeparator={true}
                prefix={` ${prefix} `}
                customInput={DMTTextInput}
                error={error}
                label={label}
                onBlur={onBlur}
                helperText={helperText}
                required={required}
                {...other}
            />
        )
    }

    return(
        <>
            <FormControl
                component={'div'}
                fullWidth={fullWidth}
                variant="standard"
                error={error}
            >
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} sm={12} md={12}>
                        <InputLabel shrink htmlFor={name} required={required} error={error} onBlur={onBlur}>
                            {label}
                        </InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <CurrencyFormat
                            value={value}
                            name={name}
                            allowNegative={false}
                            onValueChange={onChange}
                            //isNumericString={true}
                            decimalScale={0}
                            thousandSeparator={true}
                            prefix={` ${prefix} `}
                            customInput={BootstrapInput}
                            error={error}
                            onBlur={onBlur}
                            helperText={helperText}
                            {...other}
                        />
                    </Grid>
                </Grid>
            </FormControl>

        </>
    )
}

export default DMTCurrencyInput;