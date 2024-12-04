import {InputAdornment, MenuItem, Tooltip, Typography} from "@mui/material";
import DMTTextInput from "@/components/@shared-components/forms/text-input";
import {COUNTRIES} from "@/utils/constants";
import Box from "@mui/material/Box";

const DMTPhoneInput = props => {
    const {  label, fullWidth, value, name, countryCode = '+254', onChangeCountryCode, error, helperText, onChange, ...other } = props;

    return (
        <>
            <DMTTextInput
                label={label}
                fullWidth={fullWidth}
                value={value}
                name={name}
                type={'number'}
                error={error}
                helperText={helperText}
                onChange={onChange}
                InputProps={{
                    form: {
                        autocomplete: "off",
                    },
                    startAdornment: (
                        <>
                            <InputAdornment position="start">
                                <DMTTextInput
                                    select
                                    disabled
                                    style={{ width: "50px" }}
                                    label=""
                                    name="countryCode"
                                    variant={"standard"}
                                    value={countryCode}
                                    onChange={onChangeCountryCode}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                >
                                    {COUNTRIES?.map((country, index) => (
                                        <MenuItem key={index} value={country.dialCode}>
                                            <Tooltip title={country.name} arrow>
                                                <Box
                                                    px={2}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <img width={20} height={20} src={country.flag}/>
                                                    {/*<Typography mr={1} ml={1} variant={'inherit'} fontWeight={'bold'}>*/}
                                                    {/*    {country.dialCode}*/}
                                                    {/*</Typography>*/}
                                                </Box>
                                            </Tooltip>
                                        </MenuItem>
                                    ))}
                                </DMTTextInput>
                            </InputAdornment>
                            <InputAdornment sx={{ fontWeight: 'bold'}} position={"start"}>
                                {countryCode}
                            </InputAdornment>
                        </>
                    ),
                }}
                {...other}
            />
        </>
    )
}

export default DMTPhoneInput;