"use client"
import React, { useEffect, useState } from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import { PiToolboxDuotone } from "react-icons/pi";
import { RiComputerFill } from "react-icons/ri";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'


const Achievement = () => {

    const [counterOn, setCounterOn] = useState(false);
    const achievement_items = [
        { id: 0, img: <BsNewspaper className="achivement_icons" />, name: "Events", number: 200 },
        { id: 1, img: <FaUserGroup className="achivement_icons" />, name: "STUDENTS ENROLLED", number: 1500 },
        { id: 2, img: <PiToolboxDuotone className="achivement_icons" />, name: "PLACEMENTS", number: 200 },
        { id: 3, img: <RiComputerFill className="achivement_icons" />, name: "Computers", number: 60 },
    ]
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='achievement_container'>
                <span className='achievement_heading'>CENTER ACHIEVEMENTS</span>
                <div className='achievement'>

                    {achievement_items.map((item) => (
                        <div key={item.key} className='item'>
                            {item.img}
                            <span className='achivement_count'>
                                {counterOn ? (<CountUp start={0} end={item.number} duration={3} delay={0.3} />) : <span>{item.number}</span>}+
                            </span>
                            <span className='achievement_name'>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Achievement