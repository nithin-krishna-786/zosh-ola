"use client"
import React from 'react'
import Success from './Success'
import Layout from '@/components/User/Layout/Layout'

const page = (props) => {
  return (
    <Layout children={<Success rideId={props.params.id} />}></Layout>
  )
}

export default page