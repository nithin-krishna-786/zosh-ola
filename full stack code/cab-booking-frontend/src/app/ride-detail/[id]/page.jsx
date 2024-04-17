"use client"
import Layout from '@/components/User/Layout/Layout'
import RideDetails from '@/components/User/RideDetails/RideDetails'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = (props) => {
  const router = useRouter();
  const id  = router
  console.log("slug",props.params.id)
  return (
    <div>
        <Layout children={<RideDetails rideId={props.params.id} />}></Layout>
    </div>
  )
}

export default page