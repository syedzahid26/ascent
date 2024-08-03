import React from 'react'
import Navbar from '../../components/Navbar'
import Top_contact from '../../components/Top_contact'

const page = () => {
  return (
    <div className='home_page'>
      <Top_contact />
      <Navbar />
    </div>
  )
}

export default page