"use client";
import React from 'react';
import Link from 'next/link';
import { MdLocalPhone } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Top_contact = () => {
    const contact_arr = [
        { id: 0, icon: <IoLogoWhatsapp className='icons' />, linkUrl: 'https://api.whatsapp.com/send?phone=917006477717' },
        { id: 1, icon: <FaFacebookSquare className='icons' />, linkUrl: "https://www.facebook.com/" },
        { id: 2, icon: <IoMdMail className='icons' />, linkUrl: 'mailto:syedzahid9797@gmail.com' },
        { id: 3, icon: <FaInstagram className='icons' />, linkUrl: 'https://www.instagram.com/cyedzahid26/' },
    ];

    return (
        <div className='top_contact_container flex_prop'>
            <div className="phone flex_prop">
                <MdLocalPhone className='icons' /> 7006477717
            </div>
            <div className="time_container flex_prop">
                <IoMdTime className='icons' />
                <span>Mon - Sat 9.00am - 5.00pm</span>
            </div>
            <div className="icons_container flex_prop">
                {contact_arr.map((item) => (
                    <Link href={item.linkUrl} key={item.id} target='_blank' className='contact'>
                        {item.icon}
                    </Link>
                ))}
            </div>
            <div className="login flex_prop ml20">
                <FaRegUser className='icons' />
                <span>Login</span>
            </div><hr />
            <span>
                Register
            </span>
        </div>
    );
};

export default Top_contact;
