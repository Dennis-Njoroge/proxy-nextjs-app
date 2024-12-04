import DMTTextInput from "@/components/@shared-components/forms/text-input";
import {MenuItem} from "@mui/material";
import {storeTypesOpts} from "@/utils/constants";

const StoreTypesSelect = props => {
    const {options = storeTypesOpts, ...other} = props;
    return (
        <DMTTextInput
            select
            {...other}
        >
            {options && options?.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                    {option?.name}
                </MenuItem>
            ))}

        </DMTTextInput>
    )
}

export default StoreTypesSelect;