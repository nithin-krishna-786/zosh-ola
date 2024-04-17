"use client";

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { makeEmpty } from "@/Redux/EmptyAction";
import { SEARCH_SUCCESS } from "@/Redux/Ride/ActionType";

const SearchResultCard = ({ item,latitude_key ,longitude_key,setActiveField,area_key }) => {
    const dispatch=useDispatch();
    const router=useRouter();
    const pathname=usePathname()
    const searchParams=useSearchParams()

    const handleSelect=()=>{
        console.log("handle select ----- ",router,pathname," ------- ",searchParams.toString())
   
        const params = new URLSearchParams(searchParams);
        params.set([latitude_key], item.lat);
        params.set([longitude_key], item.lon);
        params.set([area_key],item?.display_name)
        router.replace(pathname+"?"+params.toString())


        console.log("url - ",pathname+"?"+params.toString())
          dispatch(makeEmpty(SEARCH_SUCCESS))
          setActiveField(null);
    }
  return (
    <div onClick={handleSelect} className="flex items-center py-2 z-10 bg-white cursor-pointer">
      <div className="pr-5">
        <LocationOnIcon />
      </div>
      <div>
        <p className="font-semibold">{item?.display_name.split(" ")[0]}</p>
        <p className="font-semibold opacity-60">
          {item?.display_name}
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;
