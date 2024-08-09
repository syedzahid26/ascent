'use client'
import React from 'react'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {

    const footer_content = [
        { title: 'Important links', text1: 'About us', text2: "Contact us", text3: "Courses", text4: "Placements" },
        { title: 'Call/Whatsapp Us', phone_num: "India:+91 7006  477   717", whatsapp_num: 'Whatsapp: +91 7006  410  530' },
        { title: 'Social links', fb: <BiLogoFacebookCircle />, twitter: <AiFillTwitterCircle />, insta: <AiOutlineInstagram /> },
    ]
    return (
        <div className='footer_sec'>
            <div className='links_container' >
                <div className="aboutus_text">
                    <span className='bold-text '>About Us</span>
                    <span className='desc text-align font14'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a tempora culpa odio, quos autem illum ea eveniet beatae adipisci asperiores repellat quae voluptatibus, at expedita tempore voluptatum dicta quia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quia.
                    </span>
                </div>
                {/* <Location /> */}
                {footer_content?.map((item) => <div className='link_sec'>

                    {<span className='bold-text'>{item.title}</span>}
                    <div className='links_parent'>
                        {item.text1 && <Link href={'/aboutus'} className='font14  desc link'>{item.text1}</Link>}
                        {item.text2 && <Link href={'/contactus'} className='font14  desc link'>{item.text2}</Link>}
                        {item.phone_num && <Link href={'tel:+91 7006178762'} target={'_blank'} className='font14 link desc'>{item.phone_num}</Link>}
                        {item.whatsapp_num && <Link href={'https://api.whatsapp.com/send?phone=917006477717'} target={'_blank'} className='font14 link desc'>{item.whatsapp_num}</Link>}

                        {item.fb && <span className='font20 desc'>{item.twitter} {item.fb} {item.insta}</span>}</div>
                </div>)}
            </div>  <div className='desc mt20'> By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Ascent IMT ™ Ltd. All rights reserved.</div> </div>
    )
}

export default Footer
