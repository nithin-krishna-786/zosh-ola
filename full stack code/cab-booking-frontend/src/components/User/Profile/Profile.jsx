"use client";

import React, { useEffect } from "react";
import WestIcon from "@mui/icons-material/West";
import RideCard from "../RidesCard/RideCard";
import { Avatar, Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

 
import { useRouter } from "next/navigation";
import { getUser, logout } from "@/Redux/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { deepOrange } from "@mui/material/colors";
import { getCompletedRides } from "@/Redux/User/Action";
import CallIcon from '@mui/icons-material/Call';
import WifiIcon from '@mui/icons-material/Wifi';

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { auth,user } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    console.log("jwt --- ", jwt);
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(getCompletedRides());
    }
  }, [jwt]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  return (
    <div className="px-2 lg:px-5">
      <div className=" px-2 lg:px-5 py-2">
        <WestIcon className="cursor-pointer" onClick={goBack} />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          {auth.user?.fullName ? auth.user?.fullName[0] : auth.user?.name[0]}
        </Avatar>
        <p>{auth.user?.fullName}</p>
        <p>{auth.user?.mobile}</p>
      </div>
     {user.completedRides.length>0 && <div className="border rounded-sm mt-5">
        <RideCard ride={user.completedRides[0]}/>
        {user.completedRides.length>1 && <div className="flex flex-col items-center p-3">
          <Button onClick={() => router.push("/your-rides")} variant="text">
            See all rides
          </Button>
        </div>}
      </div>}

      <div className="border mt-5">
        <div className="flex items-center p-3 border-b">
          <AccountBalanceWalletIcon className="text-green-600" />
          <p className="ml-4">ola money</p>
        </div>
        <div className="flex items-center p-3 border-b">
          <CallIcon />
          <p className="ml-4">Emergency Contact</p>
        </div>
        <div className="flex items-center p-3">
          <WifiIcon />
          <p className="ml-4">Ola Wi-Fi Credentials</p>
        </div>
      </div>

      <div className="mt-5">
        <Button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white"
          color="error"
          variant="contained"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
