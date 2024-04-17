"use client";
import { getDriversCompletedRide } from "@/Redux/Driver/Action";
import AllocatedRideCard from "@/components/Driver/AllocatedRideCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CompletedRides = () => {
  const { driver } = useSelector((store) => store);
  const dispatch = useDispatch();

  // console.log("driver ", driver);

  useEffect(() => {
    dispatch(getDriversCompletedRide());
  }, []);
  return (
    <div>
      <div>
        {driver.completedRides?.map((item) => (
          <div className="shadow-2xl py-2 px-3 border-2 border-gray-300 rounded-md mb-3">
            <AllocatedRideCard type={"Completed"} ride={item} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedRides;
