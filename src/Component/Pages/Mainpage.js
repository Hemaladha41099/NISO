import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Product from './Product'
const Mainpage = () => {
  return (
    <div className='layout text-white'>
      <div className='Header'><Header/></div>
      <div className='Sidebar'><Sidebar/></div>
      <div className='Product centered'><Product/></div>
      <div className='Footer centered'><Footer/></div>
    </div>
  )
}

export default Mainpage