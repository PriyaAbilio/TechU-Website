import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'


import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

import 'swiper/css/scrollbar';
import "../css/courses.css"

const Courses = () => {
    const courses = [
        {
            image: "../images/data-exploration-codebook_svgrepo.com.png",
            title: "Front & Back-End Development",
        },
        {
            image: "../images/data-line_svgrepo.com.png",
            title: "Business Analysis & Architecture",
        },
        {
            image: "../images/data-science_svgrepo.com.png",
            title: "Data Science & Analytics",
        },
        {
            image: "../images/ranking_svgrepo.com.png",
            title: "Digital Marketing & Ads Campaign",
        }, {
            image: "../images/data-exploration-codebook_svgrepo.com.png",
            title: "Front & Back-End Development",
        },
        {
            image: "../images/data-line_svgrepo.com.png",
            title: "Business Analysis & Architecture",
        },
        {
            image: "../images/data-science_svgrepo.com.png",
            title: "Data Science & Analytics",
        },
        {
            image: "../images/ranking_svgrepo.com.png",
            title: "Digital Marketing & Ads Campaign",
        }
    ]
    const containerRef = useRef(null);

    const carouselNavNext = () => {
        console.log("next")
        if (containerRef.current) {
            const width = containerRef.current.clientWidth;
            containerRef.current.scrollLeft += width;
        }
    };

    const carouselNavPrev = () => {
        console.log("prev")
        if (containerRef.current) {
            const width = containerRef.current.clientWidth;
            containerRef.current.scrollLeft -= width;
        }
    };



    return (
        <div className='container-fluid courses mt-5'>
            <h6>Categories</h6>
            <h1 className='mt-4'>POPULAR COURSES TO LEARN</h1>

            <div className='courses-carousel'>
                <div className='' onClick={carouselNavPrev} style={{ height: "23rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button className='arrow'>
                        <ArrowLeft size={35} />
                    </button>
                </div>
                <div className='coursescontainer' ref={containerRef}>
                    {
                        courses.map((val, index) => (
                            <div className={`course-slide`} style={{ width: "18rem" }} key={index}>
                                <div className="card m-0 course-card " style={{ width: "16rem", height: "23rem" }}>
                                    <div className='center w-100 d-flex justify-content-center pt-5'>
                                        <div className='w-25'>
                                            <img src={val.image} className="" alt="..." height={50} width={50} />
                                        </div>
                                    </div>

                                    <div className="card-body pt-5">
                                        <h3 className="card-title">{val.title}</h3>
                                        <a href="#" className="btn pt-5 ">  <ArrowRight size={35} /> </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div style={{ height: "23rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button className='arrow' onClick={carouselNavNext} >
                        <ArrowRight size={35} />
                    </button>
                </div>
            </div >



            <p className='para pt-5'>Enjoy the top notch learning methods and achieve next level skills! You are the creator of
                your <br />own career & we will guide you through that. <a href='#' className='anchor'>Register Now!</a>
            </p>
            <button className='explore px-5 py-3 m-5'>Explore Courses</button>
        </div>

    )
}

export default Courses