"use client";
import React, { useEffect, useState } from "react";
import DriversRide from "./DriversRide";
import RideCard from "../User/RidesCard/RideCard";
import BlockIcon from "@mui/icons-material/Block";
import { Card, CardHeader, useStepContext } from "@mui/material";
import AllocatedRideCard from "./AllocatedRideCard";
import { getUser } from "@/Redux/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import {
  getAllocatedRides,
  getDriversCompletedRide,
  getDriversCurrentRide,
} from "@/Redux/Driver/Action";
import { currentRideAction } from "../../Redux/Ride/Action";

const Dashbord = () => {
  const [isCurrentRide, setIsCurrentRide] = useState(false);
  const [isAllocated, setIsAllocated] = useState(false);
  const { auth, driver, ride } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const router=useRouter();


  console.log("ride",ride)

  useEffect(()=>{
    dispatch(getDriversCompletedRide());
    dispatch(getUser(jwt));
  },[ride.finisheRide])

  useEffect(() => {
    const intervalId = setInterval(() => {
      // dispatch(yourActionCreator());
      // dispatch(getAllocatedRides(auth.user?.id));
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
   
  }, [auth.user?.id]);

  useEffect(() => {
    if (auth.user?.id) {
      dispatch(getAllocatedRides(auth.user?.id));
    }
  }, [auth.user?.id, ride.decliningRide]);

  useEffect(() => {
    if(!auth.user) {
      // router.push("/login")
    }

    if (auth.user?.id) {
      dispatch(getDriversCurrentRide(auth.user?.id));
    }
  }, [auth.user?.id, ride.acceptingRide, ride.startRide, ride.completedRide,ride.finisheRide]);

  return (
    <div className="">
      <DriversRide />

      <Card className="mt-5  py-5">
        <CardHeader
          className="font-bold"
          title="Current Ride"
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: "2rem !important",
              letterSpacing: "0.15px !important",
              fontWeight: "bold",
            },
          }}
        />

        {driver.currentRide ? (
          <AllocatedRideCard
            key={ride.id}
            ride={driver.currentRide}
            type={"Current"}
          />
        ) : (
          <div className="w-full flex flex-col items-center justify-center py-5">
            <BlockIcon className="w-20 h-20" />
            <p className="text-xl font-semibold">
              Currently You Don't Have Any Ride
            </p>
          </div>
        )}
      </Card>

      <Card className="mt-5 py-5">
        <CardHeader
          title="Allocated To You"
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: "2rem !important",
              letterSpacing: "0.15px !important",
              fontWeight: "bold",
            },
          }}
        />

        {driver.allocated.length > 0 ? (
          driver?.allocated?.map((ride) => (
            <AllocatedRideCard type="Allocated" key={ride.id} ride={ride} />
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center py-5">
            <BlockIcon className="w-20 h-20" />
            <p className="text-xl font-semibold">
              Currently, no ride has been allocated.
            </p>
          </div>
        )}

   
      </Card>
    </div>
  );
};

export default Dashbord;
