"use client"
import { findRideById } from '@/Redux/Ride/Action';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from "@mui/material";

const Success = ({rideId}) => {
    const dispatch=useDispatch();
    const router=useRouter()
    const {ride}=useSelector(store=>store);
  
    useEffect(()=>{
      dispatch(findRideById(rideId))
    },[rideId])

  return (
    <div className='px-20 flex flex-col justify-center h-[99vh] border '>
        <div className='border border-slate-600 rounded-md p-5 relative w-[100%]'>
            <CheckCircleIcon className='absolute right-[45%] -top-9 text-green-900 text-6xl text-center z-10 bg-white' fontSize='3rem'/>
            <div className='my-5'>
           <p className='text-center text-xl font-semibold py-2 text-green-800 '>Thank You For Choosing Us</p>
            <p className='text-center text-xl font-semibold py-2 text-green-800 '>PAYMENT SUCCESS</p>
            </div>

            <div>
              <img className='h-[20rem] w-full object-cover object-bottom' src="https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png" alt="" />
            </div>

            <div>
              <Button onClick={()=>router.push("/")} color='secondary' className='w-full py-2' variant='contained'>Go To Home</Button>
            </div>
 
{/*             
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Total Faire</p>
            <p className='text-blue-700 font-semibold'>₹{ride.ride?.fare}</p>
            </div>
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Distance</p>
            <p className='text-blue-700 font-semibold'>{ride.ride?.distance}</p>
            </div>
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Duration</p>
            <p className='text-blue-700 font-semibold'>{ride.ride?.duration}</p>
            </div>
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Ride Id</p>
            <p className='text-blue-700 font-semibold'>{ride.ride?.id}</p>
            </div>
            <div className='flex justify-between py-2 items-center'>
            <p className='font-semibold opacity-60'>Total Faire</p>
            <p className='text-blue-700 font-semibold'>Rs.20</p>
            </div> */}
           
        </div>
    </div>
  )
}

export default Success