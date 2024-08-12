"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Courses = () => {
    const courses_items = [
        {
            id: 0,
            head: "WEB DESIGNING",
            img: "./images/final.png",
            desc: "Web design courses are in high demand due to the growth of the online industry, as businesses and individuals alike are creating and maintaining websites.",
            bgcolor: "#8430E5",
            linkurl: "/course/0",
        },
        {
            id: 1,
            head: "E Accounting",
            img: "./images/finance.png",
            desc: "E-Accounting Course covers accounting software and systems to manage financial transactions efficiently. It is ideal for those in accounting, finance, or taxation.",
            bgcolor: "#1148D6",
            linkurl: "/course/1",
        },
        {
            id: 2,
            head: "DCA",
            img: "./images/DCA.png",
            desc: "The course is designed to give students basic, realistic, and technological details about programming tools and applications they use every day.",
            bgcolor: "#177C65",
            linkurl: "/course/2",
        },
        {
            id: 3,
            head: "O Level",
            img: "./images/olevel.png",
            desc: "The course is designed to give students basic, realistic, and technological details about programming tools and applications they use every day.",
            bgcolor: "#E948AE",
            linkurl: "/course/3",
        },
    ];

    const router = useRouter();

    const handleSubmenuClick = (item) => {
        router.push(item.linkurl);
    };

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4, // Show 4 slides on large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024, // For screens 1024px and below
                settings: {
                    slidesToShow: 3, // Show 3 slides on medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 763, // For screens 763px and below
                settings: {
                    slidesToShow: 2, // Show 2 slides on smaller screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 626, // For screens 626px and below
                settings: {
                    slidesToShow: 1, // Show 1 slide on extra small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="courses_container">
            <Slider {...settings}>
                {courses_items.map((item) => (
                    < Card
                        item={item}
                        key={item.id}
                        router={router}
                        onClick={() => handleSubmenuClick(item)}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Courses;
