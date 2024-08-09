"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { CiBookmark } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";

const courses_items = [
    { id: 0, head: "WEB DESIGNING", slogan: "Design Your Web", duration: "6 Months", img: "/images/webdesining_course.jpg", desc: "Our Web Designing course is specially designed with lots of useful technologies. This course period is of 1 year. Indian Computer Institute has been providing Web Designing courses packaged with scripting languages, designing tools and publishing tools.", bgcolor: "#8430E5" },
    { id: 1, head: "E Accounting", slogan: "Design Your Ideas", duration: "6 Months", img: "/images/accoutingCourse.jpg", desc: "E-Accounting Course covers accounting software and systems to manage financial transactions efficiently. It is ideal for those in accounting, finance, or taxation.", bgcolor: "#1148D6" },
    { id: 2, head: "Diploma in Computer APPlication", slogan: "Get introduced to computer", duration: "6 Months", img: "/images/dca_course.jpg", desc: "The course is intended to provide learners with basic, realistic and technological details pertaining to programming tools and applications which are used in our everyday lives. An intermediate or 12th class in any stream from a recognized board or university is the required qualification needed for this program.", bgcolor: "#177C65" },
    { id: 3, head: "O Level", img: "/images/olevel.png", slogan: "Design Your Ideas", duration: "6 Months", desc: "The course is designed to give students basic, realistic, and technological details about programming tools and applications they use every day.", bgcolor: "#E948AE" }
];

const CoursePage = () => {
    const { courseid } = useParams();
    const course = courses_items.find(item => item.id === parseInt(courseid));

    if (!course) {
        return <div className='error-container'>
            <h1> 404 </h1>
            <p>
                Oops! The page you're
                looking for is not here.
            </p>
            <a href="/">
                Go Back to Home
            </a></div>;
    }

    return (
        <div className='courses_container_page'>
            <div className="title">
                <h1>{course.head.toUpperCase()}</h1>
                <h2>{course.slogan}</h2>
            </div>
            <div className="course_details">
                <div className="left">
                    <span className='course_head'>{course.head}</span>
                    <div className="catergory_container">
                        <div className="bookmark_text">
                            <CiBookmark className='bookmark_icon' /><div className="category_text">
                                <span className='desc'>Category:</span>
                                <span className='all_text'>ALL SOFTWARE TRAINING COURSES</span>
                            </div>
                        </div>
                        <div className="review">
                            <div className="star">
                                <FaStar className='star_icon' /><FaStar className='star_icon' /><FaStar className='star_icon' /><FaStar className='star_icon' /><CiStar className='star_icon' />
                            </div>
                            <div className="review_text">22 REVIEWS</div>
                        </div>
                    </div>
                    <div className="course_img">
                        <img src={course.img} alt="" />
                    </div>
                    <div className="course_desc">
                        <span className="course_head">{course.head}</span>
                        <span className="desc">{course.desc}</span>
                    </div>
                </div>
                <div className="right">
                    <div className="additional_detials">
                        <MdAccessAlarm className='bookmark_icon' /> <div className="text">Duration:{course.duration}</div>
                    </div>
                    <div className="additional_detials">
                        <GrAnnounce className='bookmark_icon' /> <div className="text">Lectures:  60</div>
                    </div> <div className="additional_detials">
                        <PiCertificate className='bookmark_icon' /> <div className="text">Certificate of Completion</div>
                    </div>
                </div>

            </div>

            {/* <div className="coureses" style={{ backgroundColor: course.bgcolor }}>
                <span className="heading">{course.head}</span>
                <img src={course.img} alt={course.head} />
                <span className="desc">{course.desc}</span>
            </div> */}
        </div>
    );
};

export default CoursePage;
