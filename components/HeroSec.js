"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSec = () => {
    const images = [
        { id: 0, src: "./images/excellence.jpg", alt: "Excellence" },
        { id: 1, src: "./images/Accounting-Course.jpg", alt: "Accounting Course" },
        { id: 2, src: "./images/Scholarship.jpg", alt: "Scholarship" },
        { id: 3, src: "./images/wallpaper.jpg", alt: "wallpaper" },
    ];
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 763,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 626,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='herosec'>
            <Slider  {...settings}>
                {images.map((item) => (
                    <img key={item.id} src={item.src} alt={item.alt} />
                ))}
            </Slider>
        </div>
    );
}

export default HeroSec;
