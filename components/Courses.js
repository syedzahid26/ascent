"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card'; // Import the CourseCard component

const Courses = () => {
    const courses_items = [
        { id: 0, head: "WEB DESIGNING", img: "./images/final.png", desc: "Web design courses are in high demand due to the growth of the online industry, as businesses and individuals alike are creating and maintaining websites.", bgcolor: "#8430E5" },
        { id: 1, head: "E Accounting", img: "./images/finance.png", desc: "E-Accounting Course covers accounting software and systems to manage financial transactions efficiently. It is ideal for those in accounting, finance, or taxation.", bgcolor: "#1148D6" },
        { id: 2, head: "DCA", img: "./images/DCA.png", desc: "The course is designed to give students basic, realistic, and technological details about programming tools and applications they use every day.", bgcolor: "#177C65" },
        { id: 3, head: "O Level", img: "./images/olevel.png", desc: "The course is designed to give students basic, realistic, and technological details about programming tools and applications they use every day.", bgcolor: "#E948AE" }
    ];

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,  // Show 4 slides on large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,  // For screens 1024px and below
                settings: {
                    slidesToShow: 2,  // Show 3 slides on medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 763,  // For screens 763px and below
                settings: {
                    slidesToShow: 2,  // Show 2 slides on smaller screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 626,  // For screens 626px and below
                settings: {
                    slidesToShow: 1,  // Show 1 slide on extra small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='courses_container'>
            <Slider {...settings}>
                {courses_items.map((item) => (
                    <Card key={item.id} item={item} />  // Use the CourseCard component
                ))}
            </Slider>
        </div>
    );
};

export default Courses;
