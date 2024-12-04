import Sidebar from "@/components/@layouts/test-modern-layout/sidebar";
import {userMenus} from "@/utils/constants";
import {Box} from "@mui/material";
import Navbar from "@/components/@layouts/test-modern-layout/navbar";

const menuItems = userMenus;
const ModernLayout = ({ children }) => {
   return (
       <Box sx={{ display: 'flex' }}>
           <Sidebar menuItems={menuItems}/>
           <Navbar/>
           <Box component="main" sx={{ flexGrow: 1, padding: 3, marginTop: 8 }}>
               {children}
           </Box>
       </Box>
   )
}

export default ModernLayout;