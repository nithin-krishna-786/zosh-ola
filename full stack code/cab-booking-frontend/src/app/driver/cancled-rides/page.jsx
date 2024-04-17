import Layout from '@/components/Driver/Layout'
import React from 'react'
import CancledRides from './CancledRides'

const page = () => {
  return (
    <div>
        <Layout Children={<CancledRides/>}/>
    </div>
  )
}

export default page