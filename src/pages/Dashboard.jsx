import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/core/Dashboard/Sidebar'

const Dashboard = () => {
    
  const {loading:authloading}=useSelector((state)=>state.auth)
  const {loading:profileloading}=useSelector((state)=>state.profile)

  if(profileloading||authloading){
    return(
      <div className='loader flex justify-center items-center'></div>
    )
  }

  return (
    <div className='relative flex min-h-[calc[100vh-3.5rem]]'>
      <Sidebar/>
      <div className='h-[calc(100vh-3.5rem)] overflow-auto w-full'>
        <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
