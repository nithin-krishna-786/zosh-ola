"use client"
import Layout from '@/components/User/Layout/Layout'
import Rides from '@/components/User/Ride/Rides'
import React from 'react'

const page = () => {
  return (
    <div>
        <Layout children={<Rides/>}/>
    </div>
  )
}

export default page