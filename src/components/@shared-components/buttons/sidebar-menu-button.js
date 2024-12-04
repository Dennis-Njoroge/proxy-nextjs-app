import Box from "@mui/material/Box";
import {Icon, Typography} from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ExpandMore from "@mui/icons-material/ExpandMore";


const SidebarMenuButton = props => {
    const {open, icon, width='auto', isActive, label, color = 'inherit', backgroundColor, isParent = false ,...others} = props;
    const iconSize  = isParent ? 30 : 30;

    return (
        <>
            <Box sx={{
                borderRadius: 1,
                backgroundColor: isActive ? 'neutral.100' : backgroundColor,
                mx: -0.5,
                width: width,
                overflow: 'hidden',
                transition: 'background-color 0.3s',
            }}
                 {...others}
            >
                <Box sx={{
                    //width: '100%',
                    display: 'flex',
                    cursor: 'pointer',
                    color: isActive ? "primary.main" : color,
                    justifyContent: 'flex-start',
                    //justifyContent: 'center',
                    alignItems: 'center',
                    gap:1,
                    py:0.5,
                    px:0.5,
                    '&:hover': {
                        color:  !isActive ? 'neutral.300' : "text.primary"
                    },
                }}

                >
                    <Box sx={{
                        backgroundColor: isActive ? 'primary.main' :'inherit',
                        color: isActive ? 'primary.contrastText' :'inherit',
                        borderRadius: 1,
                        width: iconSize,
                        height: iconSize,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon fontSize={'small'} color={"inherit"}>
                            {icon}
                        </Icon>
                    </Box>

                    <Typography   variant={'subtitle1'} fontWeight={isActive ? 'bold' : 'inherit'} color={"inherit"}>
                        {label}
                    </Typography>
                    <Box flex={'1 0 auto'}/>

                    {Boolean(isParent) &&(
                        <>

                            {!open ? (
                                <ChevronRight color={"inherit"}  />
                            ) : (
                                <ExpandMore color={"inherit"}  />
                            )
                            }
                        </>
                    )}
                </Box>
            </Box>

        </>
    )
}

export default SidebarMenuButton;