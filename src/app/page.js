import React from 'react'
import HeroSec from '../../components/HeroSec'
import Courses from '../../components/Courses'
import Achievement from '../../components/Achievement'



const page = () => {
  return (
    <div className='home_page roboto'>
      <HeroSec />
      <Courses />
      <Achievement />
    </div>
  )
}

export default page