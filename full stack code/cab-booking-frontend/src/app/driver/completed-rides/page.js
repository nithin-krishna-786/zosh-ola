import Layout from '@/components/Driver/Layout'
import React from 'react'
import CompletedRides from './CompletedRides'

const page = () => {
  return (
    <div>
        <Layout Children={<CompletedRides/>}></Layout>
    </div>
  )
}

export default page