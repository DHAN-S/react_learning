import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const Masterlayout = () => {
  return (
<>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Masterlayout