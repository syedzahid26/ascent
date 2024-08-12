"use client"
import React from 'react';

const Card = ({ item, router, onClick }) => {
    const handleClick = () => {
        router.push(item.linkurl);
    };

    return (
        <div className='course_card' style={{ backgroundColor: item.bgcolor }} onClick={handleClick}>
            <span className="heading">{item.head}</span>
            <img src={item.img} alt={item.head} />
            <span className="desc">{item.desc}</span>
        </div>
    );
};

export default Card;
