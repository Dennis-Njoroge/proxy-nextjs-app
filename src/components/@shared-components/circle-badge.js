import {Typography} from "@mui/material";
import Box from "@mui/material/Box";


const CircleBadge = ({ color= 'warning.main',text, width=20, height= 20 }) => {
    return (
        <Box
            className={'flex items-center justify-center'}
             sx={{
                 backgroundColor: color,
                 borderRadius: '50%',
                 width: width,
                 height: height,
                 p:1,
        }}
        >
            {Boolean(text) && (
                <Typography variant={'caption'} fontWeight={'bold'} align={'center'} color={'primary'}>
                    {text}
                </Typography>
            )}

        </Box>
    )
}

export default CircleBadge;