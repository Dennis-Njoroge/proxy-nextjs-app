import Box from "@mui/material/Box";
import {Skeleton, Tooltip, Typography} from "@mui/material";

const PropertyItem = ({ label, value, isLoading = false,  ...other }) => {
    return (
        <Box sx={{ display: 'flex', gap:1, justifyContent: 'space-between', my:1}} {...other}>
            <Typography variant={'body2'} fontWeight={'bold'}>
                {label}: {` `}
            </Typography>
            {isLoading ? (
                <Skeleton animation="wave" height={20} width="40%" />
            ) : (
                <Tooltip title = {label}>
                    <Typography variant={'body2'} >
                        {Boolean(value) ? value : '-'}
                    </Typography>
                </Tooltip>
            )}

        </Box>
    )
}

export default PropertyItem;