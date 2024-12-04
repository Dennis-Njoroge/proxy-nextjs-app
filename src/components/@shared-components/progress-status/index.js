import {CircularProgress, Typography} from "@mui/material";
import Box from "@mui/material/Box";


const ProgressStatus = props => {
    const { value } = props;
    return (
        <>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress size={35} variant="determinate" color={'warning'} value={value} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography fontSize={'xx-small'} variant="caption" component="div" color="text">
                        {`${value}%`}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default ProgressStatus;