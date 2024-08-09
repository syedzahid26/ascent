"use client"
import React from 'react';

const Card = ({ item }) => {
    return (
        <div className='course_card' style={{ backgroundColor: item.bgcolor }}>
            <span className="heading">{item.head}</span>
            <img src={item.img} alt={item.head} />
            <span className="desc">{item.desc}</span>
        </div>
    );
};

export default Card;
