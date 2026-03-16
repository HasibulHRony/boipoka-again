import React from 'react'
import NavBar from '../component/Header/NavBar'
import Footer from '../component/Footer/Footer'
import { Outlet } from 'react-router'

export default function Root() {
  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar></NavBar>
      <div className='px-2'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
