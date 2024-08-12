import React from 'react'
import HeroSec from '../../components/HeroSec'
import Courses from '../../components/Courses'
import Achievement from '../../components/Achievement'
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'

const page = () => {
  return (
    <div className='home_page roboto'>
      <HeroSec />
      <Courses />
      <Achievement />
      <Link className="whatsapp_icon" target='_blank' href="https://api.whatsapp.com/send?phone=917006477717"><img src="/images/whatsapp.png" alt="" /></Link>
    </div>
  )
}

export default page