import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import NotificationIcon from "@mui/icons-material/Notifications";

const NotificationBadge = () => {
    return (
        <>
            <Box sx={{ color: 'action.active' }}>
                <Badge color="primary" variant="dot" badgeContent=" ">
                    <NotificationIcon color={'primary'} size={'25px'}/>
                </Badge>
            </Box>
        </>
    )
}

export default NotificationBadge;