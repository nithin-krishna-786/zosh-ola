"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Drawer } from "@mui/material";
import { drawerList } from "../HomeComponents/DrawerList";
import { useRouter } from "next/navigation";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/Redux/Auth/Action";

export default function Navbar() {
  const [sidebarOpen, setSideBarOpen] = React.useState(false);
  const handleSideBarOpen = () => setSideBarOpen(!sidebarOpen);
  const handleSidebarClose = () => setSideBarOpen(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  // const router = useRouter();

  console.log("auth ------- ", auth);

  React.useEffect(() => {
    console.log("jwt --- ", jwt);
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  return (
    <Box className=''>
      <AppBar sx={{backgroundColor:'#120E43'}} className="" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={handleSideBarOpen} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zosh Cab
          </Typography>

          {auth.user?.fullName || auth.user?.name ? (
            <Avatar
              className="cursor-pointer"
              onClick={() => router.push("/profile")}
              sx={{ bgcolor: deepOrange[500] }}
            >
              {auth.user?.fullName
                ? auth.user?.fullName[0]
                : auth.user?.name
                ? auth.user?.name[0]
                : ""}
            </Avatar>
          ) : (
            <Button onClick={() => router.push("login")} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>
  );
}
