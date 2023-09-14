import React, { useRef } from 'react'

import "../css/testimonials.css"
import { ArrowLeft, ArrowRight, StarFill } from 'react-bootstrap-icons'

export default function Testimonials() {

    const courses = [
        {
            image: "../images/man.png",
            title: "Front & Back-End Development",
        },
        {
            image: "../images/man.png",
            title: "Business Analysis & Architecture",
        },
        {
            image: "../images/man.png",
            title: "Data Science & Analytics",
        },
        {
            image: "../images/man.png",
            title: "Digital Marketing & Ads Campaign",
        }, {
            image: "../images/man.png",
            title: "Front & Back-End Development",
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

        <>

            <div className='container-fluid testimonials cards-main'>

                <div className='test'>

                    <h6 className='test-head pt-5'> Testimonials</h6>

                    <h1 className='student-head pt-4'>Student Community Feedback</h1>

                </div>

                <div className='testimonials-carousel'>
                    <div className='' onClick={carouselNavPrev} style={{ height: "23rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className='arrow'><ArrowLeft size={35} /></button></div>
                    <div className='testimonialscontainer ' ref={containerRef}>
                        {
                            courses.map((val) => (
                                <div className='testimonials-slide'>
                                    <div class="card m-0">

                                        <div class="card-body  ">

                                            <p class="card-text p-3">Why do we use it?<br />

                                                It is a long established fact that a reader will be<br></br>

                                                distracted by the readable content of a page when <br />looking at its layout.

                                            </p>

                                            <div className='profile d-flex'>

                                                <img src={val.image} style={{ width: '98px', height: '98px' }} />

                                                <div>

                                                    <h5 className='name'>John Peter</h5>

                                                    <StarFill />
                                                    <StarFill />
                                                    <StarFill />
                                                    <StarFill />
                                                    <StarFill />

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div style={{ height: "23rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className='arrow' onClick={carouselNavNext} ><ArrowRight size={35} /></button></div>
                </div >





            </div>





        </>

    )

}