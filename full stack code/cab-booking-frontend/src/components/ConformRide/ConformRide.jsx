// "use client"

import { Avatar, Button } from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { deepOrange } from '@mui/material/colors';
import VerifiedIcon from '@mui/icons-material/Verified';
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';

const ConformRide = () => {

    const router = useRouter();

    const goBack=()=>{
        router.back()
    }

  return (
    <div className='p-5 lg:p-10 relative h-screen '>
        <WestIcon onClick={goBack} className='absolute top-5 left-10 cursor-pointer'/>
        <div className='mt-20 border rounded-sm'>
            <div className='flex items-center border-b p-3'>
                <span className='pr-5 opacity-70 text-xs font-semibold'>PICKUP : </span>
                <span>Mumbai, Mumbai Suburban, Maharashtra, India</span>
            </div>
            <div className='flex items-center border-b p-3'>
                <span className='pr-5 opacity-70 text-xs font-semibold'>DROP : </span>
                <span>Mumbai, Ramos Arizpe, Coahuila, 25900, Mexico</span>
            </div>
            <div className='flex items-center p-3'>
                <span className='pr-5 opacity-70 text-xs font-semibold'>FARE : </span>
                <span className='font-semibold'> ₹599</span>
            </div>
        </div>

        <div className='mt-5 border rounded-sm'>
            <div className='flex items-center border-b p-3'>
                <span className='pr-5 opacity-70 text-xs font-semibold'>PAY BY : </span>
                <span className='flex items-center '><Avatar className='mr-5 text-xs' sx={{ bgcolor: deepOrange[500],width:"20px",height:"20px" }}>₹</Avatar> CASE</span>
            </div>
            <div className='flex items-center border-b p-3'>
                <span className='pr-5 opacity-70 text-xs font-semibold'> COUPON : </span>
                <span><VerifiedIcon className=' text-green-600'/> SKYP3</span>
            </div>
           
        </div>

        <div className='absolute bottom-1 w-[87%]'>
            <Button varient="contained" className="bg-black text-yellow-300 w-full py-3">Confirm & Book</Button>
        </div>
    </div>
  )
}

// export default ConformRide