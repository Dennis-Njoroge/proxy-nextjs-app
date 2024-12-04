import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
import Link from 'next/link';

const drawerWidth = 240;

const SidebarContainer = styled(Box)(({ theme }) => ({
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

const Sidebar = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleMinimizeToggle = () => setIsMinimized(!isMinimized);

    const menuItems = [
        { pageName: 'Dashboard', route: '/', icon: <HomeIcon /> },
        { pageName: 'Analytics', route: '/analytics', icon: <BarChartIcon /> },
        { pageName: 'Settings', route: '/settings', icon: <SettingsIcon /> },
    ];

    const drawerContent = (
        <SidebarContainer>
            <SidebarHeader>
                <IconButton onClick={isSmallScreen ? handleDrawerToggle : handleMinimizeToggle}>
                    {isSmallScreen ? <CloseIcon /> : isMinimized ? '➡️' : '⬅️'}
                </IconButton>
                {!isMinimized && <span>Brand Logo</span>}
            </SidebarHeader>
            <List>
                {menuItems.map((item, index) => (
                    <Tooltip key={index} title={isMinimized ? item.pageName : ''} placement="right" arrow>
                        <ListItem
                            button
                            component={Link}
                            href={item.route}
                            sx={{
                                display: 'flex',
                                justifyContent: isMinimized ? 'center' : 'flex-start',
                                paddingLeft: isMinimized ? theme.spacing(2) : theme.spacing(4),
                            }}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center' }}>{item.icon}</ListItemIcon>
                            {!isMinimized && <ListItemText primary={item.pageName} />}
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
        </SidebarContainer>
    );

    return (
        <>
            {isSmallScreen && (
                <IconButton onClick={handleDrawerToggle} sx={{ position: 'absolute', top: 16, left: 16 }}>
                    <MenuIcon />
                </IconButton>
            )}
            <Drawer
                variant={isSmallScreen ? 'temporary' : 'permanent'}
                open={isSmallScreen ? mobileOpen : true}
                onClose={handleDrawerToggle}
                sx={{
                    width: isMinimized && !isSmallScreen ? 72 : drawerWidth,
                    '& .MuiDrawer-paper': {
                        width: isMinimized && !isSmallScreen ? 72 : drawerWidth,
                        overflowX: 'hidden',
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Sidebar;
