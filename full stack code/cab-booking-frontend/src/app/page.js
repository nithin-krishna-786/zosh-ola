"use client";
import Layout from '@/components/User/Layout/Layout';
import HomeComponets from '@/components/User/HomeComponents/HomeComponets';


export default function Home() {



  return (
    <main className="h-screen">

     <Layout children={<HomeComponets/>}></Layout>
     
    </main>
  )
}
