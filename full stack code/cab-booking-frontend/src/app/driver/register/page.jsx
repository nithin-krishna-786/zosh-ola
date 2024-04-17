"use client"
import DriverRegisterForm from '@/components/Auth/DriverRegisterFrom'
import Layout from '@/components/User/Layout/Layout'
import React from 'react'

const page = () => {
  return (
    <div>
        <Layout children={  <DriverRegisterForm/>}/>
      
    </div>
  )
}

export default page