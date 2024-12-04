import {Autocomplete, Box, FormControl, InputLabel, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import DMTTextInput from "@/components/@shared-components/forms/text-input";
import {getAutoCompleteValue} from "@/utils/helper-functions";

const DMTSelectDevice = props => {
    const {  onChange, fullWidth, name, label, options, defaultInput, field, value, required, error, onBlur, helperText, placeholder, ...other} = props;
    const handleOnChange = (e, value) => {
        onChange(value);
    }




    return (
        <>
            <FormControl
                component={'div'}
                fullWidth={fullWidth}
                variant="standard"
            >
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={12} sm={12} md={3.5}>
                        <InputLabel required={required} shrink htmlFor={name} error={error}>
                            {label}
                        </InputLabel>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8.5}>
                        <Autocomplete
                            options={options}
                            autoHighlight
                            onChange={handleOnChange}
                            value={getAutoCompleteValue(options, value, 'id')}
                            getOptionLabel={(option) => option?.phoneModel +'-' + option?.imeiNumber}
                            renderInput={(params) => (
                                <DMTTextInput
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
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ display: 'flex', flexDirection: 'column', flexShrink: 0  }} {...props}>
                                    <Typography variant={'subtitle1'}>
                                        {option.phoneName}
                                    </Typography>
                                    <Typography variant={'caption'}>
                                       {option.phoneModel} - {option.imeiNumber} {option.imeiNumber1 && ` | ${option.imeiNumber1}`}
                                    </Typography>
                                </Box>
                            )}
                            {...other}
                        />
                    </Grid>
                </Grid>

            </FormControl>

        </>
    )
}

export default DMTSelectDevice;