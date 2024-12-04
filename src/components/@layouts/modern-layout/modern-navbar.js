import {alpha, Toolbar, Tooltip, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import {drawerWidth} from "./index";
import MuiAppBar from '@mui/material/AppBar';
import AccountButton from "@/components/@shared-components/buttons/account-button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Box from "@mui/material/Box";
import NotificationBadge from "@/components/@layouts/modern-layout/notification-badge";

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    backgroundColor: alpha(theme.palette.background.paper, 0.6),
    backdropFilter: 'blur(8px)',
    ...(theme.palette.mode === "light"
        ? {
            boxShadow: theme.shadows[0],
        }
        : {
            backgroundColor: theme.palette.background.paper,
            borderBottomColor: theme.palette.divider,
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
            boxShadow: "none",
        }),
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
        },
        transition: theme.transitions.create(['margin', 'width'], {
            //easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const ModernNavbar = props => {
    const {open, handleDrawerOpen, title = ""} = props;

    return (
        <>
            <AppBar  position="fixed" open={open}>
                <Toolbar sx={{height: '80px', color: 'text.primary'}}>
                    <Tooltip title = {open ? "Minimize" : "Expand"}>
                        <IconButton
                            sx={{
                                ml: open? -5 : 0,
                                backgroundColor: 'secondary.main',
                                color: 'primary.contrastText',
                                '&:hover': {
                                    backgroundColor: 'secondary.light',
                                }
                        }}
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            size={'small'}
                            edge="start"
                            color={'inherit'}
                        >
                            {open ? <MenuOpenIcon/> : <MenuIcon/>}
                        </IconButton>
                    </Tooltip>
                    <Typography variant={'h6'} sx={{ ml: 1}} >
                        {title}
                    </Typography>
                    {/*{lgUp && (*/}
                    {/*    <>*/}
                    {/*        <Box sx={{flex: '1 0 auto'}}/>*/}
                    {/*        <GlobalSearchInput/>*/}
                    {/*    </>*/}
                    {/*)}*/}

                    <Box sx={{flex: '1 0 auto'}}/>
                    <NotificationBadge/>
                    <AccountButton/>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default ModernNavbar;