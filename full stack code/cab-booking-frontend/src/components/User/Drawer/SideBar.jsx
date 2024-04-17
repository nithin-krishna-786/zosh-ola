"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { drawerList } from '../HomeComponents/DrawerList';

export default function SideBar() {
  
  const [sidebarOpen,setSideBarOpen]=React.useState(false);


  const handleSideBarOpen =()=>setSideBarOpen(!sidebarOpen);
  const handleSidebarClose=()=>setSideBarOpen(false);



  return (
    <div>
     
        <React.Fragment >
          <Button onClick={handleSideBarOpen}>{"left"}</Button>
          <Drawer
            anchor={"left"}
            open={sidebarOpen}
            onClose={handleSidebarClose}
          >
            {drawerList("left")}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}