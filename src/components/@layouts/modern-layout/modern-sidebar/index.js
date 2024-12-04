import {alpha, Box, Drawer, Icon, useMediaQuery, Typography, Skeleton} from "@mui/material";
import { drawerWidth } from "../index";
import { styled } from "@mui/material/styles";
import NextLink from "next/link";
import { Logo } from "../../../logo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ModernSidebarSection from "./modern-sidebar-section";
import { useAuth } from "@/hooks/use-auth";
import { Scrollbar } from "@/components/@shared-components/scrollbar";
import Button from "@mui/material/Button";
import { RotatingLines } from "react-loader-spinner";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
}));

const ModernSidebar = props => {
    const { open, handleDrawerClose } = props;
    const router = useRouter();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("md"), {
        noSsr: true,
    });
    const { userMenus, isFetchingMenus } = useAuth();
    const sections = [{ child: userMenus }];
    const { logout } = useAuth();

    const handleOnLogout = () => {
        logout();
    };

    const handleOnCloseDrawer = () => {
        if (!lgUp) {
            handleDrawerClose();
        }
    };

    const handlePathChange = () => {
        if (!router.isReady) {
            handleOnCloseDrawer();
        }
    };

    useEffect(() => {
        handlePathChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.isReady, router.asPath]);

    const content = (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <DrawerHeader>
                    <Box sx={{ p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <NextLink href="/" passHref>
                            <Logo variant={'light'} />
                        </NextLink>
                    </Box>
                </DrawerHeader>
                <Scrollbar
                    sx={{
                        height: "calc(100% - 140px)",
                        "& .simplebar-content": {
                            height: "100%",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            {isFetchingMenus ? (
                                <>
                                    {
                                        [1,2,3,4,5,6].map((val) => (
                                            <Box key={val} sx={{my:0.5, mx:1}}>
                                                <Skeleton animation={'pulse'} width={'100%'} variant={'rounded'} height={50}/>
                                            </Box>
                                        ))
                                    }
                                    <Typography align={'center'}>{"Loading menus..."}</Typography>
                                </>
                            ) : (
                                sections.map((section, index) => (
                                    <ModernSidebarSection
                                        key={index}
                                        path={router.asPath}
                                        sx={{
                                            mt: 2,
                                            "& + &": {
                                                mt: 2,
                                            },
                                        }}
                                        {...section}
                                    />
                                ))
                            )}
                        </Box>
                    </Box>
                </Scrollbar>
                <Box sx={{ px: 1, pb: 2, pt: 1, display: 'fixed', width: '100%', bottom: 0 }}>
                    <Button
                        startIcon={<Icon>logout</Icon>}
                        color={'warning'}
                        variant={'contained'}
                        fullWidth={true}
                        onClick={handleOnLogout}
                    >
                        {"Log Out"}
                    </Button>
                </Box>
            </Box>
        </>
    );

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    zIndex: !lgUp && 10000,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: theme => theme.palette.mode === 'light' ? 'secondary.main' : 'background.paper',
                        color: theme => theme.palette.mode === 'light' ? 'primary.contrastText' : 'text.primary',
                    },
                }}
                variant={lgUp ? "persistent" : "temporary"}
                anchor="left"
                onClose={handleOnCloseDrawer}
                open={open}
            >
                {content}
            </Drawer>
        </>
    );
};

export default ModernSidebar;
