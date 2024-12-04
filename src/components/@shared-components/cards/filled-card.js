import {Box, Icon, Typography} from "@mui/material";
import Image from "next/image";


const FilledCard = props => {
    const { label, value, stats, secondary, icon, color='background.paper' } = props;
    return (
        <>
            <Box sx={{
                backgroundColor: color,
                minHeight: 120,
                boxShadow: 5,
                borderRadius: 1,
                display: 'flex',
                //alignItems: 'center',
                py: 3,
                px: 2,
                gap: 2,
            }}>
                {Boolean(icon) && (
                    <Box flex={0.5}>
                        <Image width={40} height={40} quality={100} src={icon} alt={label}/>
                    </Box>
                )}
                <Box flex={2} sx={{ display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <Typography variant={stats ? 'subtitle2' : 'h6'}  gutterBottom>{label}</Typography>
                    <Typography variant={stats ? 'h6' : 'body2'}>{value}</Typography>
                </Box>
                {Boolean(secondary) && (
                    <Box flex={1} sx={{ display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        <Typography variant={'subtitle2'} gutterBottom>{secondary.label}</Typography>
                        <Box sx={{ display: 'flex', alignItems:'baseline', color: secondary.increment ? 'success.main' : 'error.main', gap:1}}>
                            <Typography variant={'body2'}>
                                {secondary.value} %
                            </Typography>
                            <Icon>
                                {"arrow_upward"}
                            </Icon>
                        </Box>

                    </Box>
                )}
            </Box>
        </>
    )
}

export default FilledCard;