"use client"
import React, { useEffect } from 'react'
import RideCard from '../RidesCard/RideCard'
import WestIcon from "@mui/icons-material/West";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getCompletedRides } from '@/Redux/User/Action';

const Rides = () => {
    const router=useRouter()
    const dispatch=useDispatch();
    const {user}=useSelector(store=>store);

    useEffect(()=>{
      dispatch(getCompletedRides());
    },[])

    const goBack=()=>{
        router.back()
    }
  return (
    <div className='h-screen'>
        <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon className='cursor-pointer' onClick={goBack} />
        <p className="text-center w-full">Your Rides</p>
      </div>
      <div className='space-y-5 px-2 lg:px-5 h-[90vh] overflow-y-scroll'>
          {user.completedRides.map((item)=><RideCard ride={item}/>)}
      </div>
      
    </div>
  )
}

export default Rides