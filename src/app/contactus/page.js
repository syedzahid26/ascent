'use client'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

const ContactPage = () => {
    const contactArr = [
        { id: 0, icon: <BsWhatsapp className='contact_icon' />, name: "Whatsapp", desc: "Send us a Message/Query!", linkUrl: 'https://api.whatsapp.com/send?phone=917006477717', },
        { id: 1, icon: <FaLocationDot className='contact_icon' />, name: "Address", desc: "Near Astan Masjid Dangripora Pulwama", linkUrl: 'https://maps.app.goo.gl/U1AQuae5LdbBcNHF8', },
        { id: 2, icon: <BiSolidPhoneCall className='contact_icon' />, name: "Call", desc: "7006  477  717", linkUrl: "tel:+91 7006  477  717", },
        { id: 3, icon: <AiOutlineMail className='contact_icon' />, name: "Email Us", desc: "help@asecnt.com", linkUrl: 'mailto:help@asecnt.com', },
    ]

    return (
        <div className='contactus_sec mb30'>
            <div className="imagesec mb30">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7017427179626!2d74.9026572093068!3d33.871576673113836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ff4ab0b6833%3A0xc95210dc3367c5d7!2sASCENT%20INSTITUTE%20OF%20MANAGEMENT%20AND%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1722792385046!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className='heading mt40'>
                <span className='font24 bold-text'>Contact Us</span>
                <span className='font18 bold500'>We can help. Our team of experts is on hand to answer your questions</span>
            </div>
            <div className="contact_container mt20">
                {contactArr.map((item) =>
                    <Link href={item.linkUrl} target='_blank' className='contact' key={item.id}>
                        {item.icon}
                        <div className="contact_text">
                            <span className='font14 bold500'>{item.name}</span>
                            <span className='bold500 font12'>{item.desc}</span>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ContactPage
