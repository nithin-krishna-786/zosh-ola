"use client"
import React from 'react'
import PaymentPage from './PaymentPage'
import Layout from '@/components/User/Layout/Layout'

const page = (props) => {
    console.log("ride id --- ",props.params.id)
  return (
    <Layout children={<PaymentPage rideId={props.params.id} />}></Layout>
  )
}

export default page