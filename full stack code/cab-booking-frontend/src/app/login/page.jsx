"use client"

import Login from '@/components/Auth/Login'
import Layout from '@/components/User/Layout/Layout'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Layout children={<Login/>}></Layout>
    </div>
  )
}

export default Page