import React from 'react'

 

import { Link } from 'react-router-dom'

import '../css/header.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Navbar from './Navbar'

 

 

 

 

 

 

 

const Header = () => {

 

    return (

        <>

          <Navbar/>
            <Swiper

            spaceBetween={30}

            centeredSlides={true}

            autoplay={{

              delay: 2500,

              disableOnInteraction: false,

            }}

            // pagination={{

            //   clickable: true,

            // }}

            // navigation={true}

            modules={[Autoplay]}>

                <SwiperSlide>

                    <div className=' row gx-0 online-courses pic1' >

 

                        <div className='col-lg-7 col-sm-12 courses'>

 

                            <div className='heading ps-5'>

 

                                <div className='content '>

                                    <p className='leader'>The Leader in Online Learning</p>

                                    <span><h1 className='master'>Master the Skills to  <br />  <span>Drive your Career.</span></h1></span>

 

                                    <p className='free'>Free online courses from the Hyderabad's<br></br> leading experts, Join 1700+ learners today.</p>

 

                                    <ul className='lists'>

                                        <li>Access more then 10+ online courses.</li>

                                        <li>Learn with experts from Indias-leading universities.</li>

                                        <li>Learn the high-impact skills that top companies want.</li>

                                        <li>Access more then 10+ online courses.</li>

                                        {/* <li>Learn with experts from Indias-leading universities.</li>

                <li>Learn the high-impact skills that top companies want.</li>

                <li>Access more then 10+ online courses.</li> */}

 

                                    </ul>

 

 

                                </div>

                            </div>

                        </div>

 

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className=' row gx-0 online-courses mern' style={{backgroundImage:"../../public/images/Devops.png"}}>

 

                        <div className='col-lg-7 col-sm-12 courses'>

 

                            <div className='heading ps-5'>

 

                                <div className='content '>

                                    <p className='leader'>The Leader in Online Learning</p>

                                    <span><h1 className='master'>Master the Skills to  <br />  <span>Drive your Career.</span></h1></span>

 

                                    <p className='free'>Free online courses from the Hyderabad's<br></br> leading experts, Join 1700+ learners today.</p>

 

                                    <ul className='lists'>

                                        <li>Access more then 10+ online courses.</li>

                                        <li>Learn with experts from Indias-leading universities.</li>

                                        <li>Learn the high-impact skills that top companies want.</li>

                                        <li>Access more then 10+ online courses.</li>

                                        {/* <li>Learn with experts from Indias-leading universities.</li>

                <li>Learn the high-impact skills that top companies want.</li>

                <li>Access more then 10+ online courses.</li> */}

 

                                    </ul>

 

 

                                </div>

                            </div>

                        </div>

 

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className=' row gx-0 online-courses devops' style={{backgroundImage:"../../public/images/Mern-Stack.png"}}>

 

                        <div className='col-lg-7 col-sm-12 courses'>

 

                            <div className='heading ps-5'>

 

                                <div className='content '>

                                    <p className='leader'>The Leader in Online Learning</p>

                                    <span><h1 className='master'>Master the Skills to  <br />  <span>Drive your Career.</span></h1></span>

 

                                    <p className='free'>Free online courses from the Hyderabad's<br></br> leading experts, Join 1700+ learners today.</p>

 

                                    <ul className='lists'>

                                        <li>Access more then 10+ online courses.</li>

                                        <li>Learn with experts from Indias-leading universities.</li>

                                        <li>Learn the high-impact skills that top companies want.</li>

                                        <li>Access more then 10+ online courses.</li>

                                        {/* <li>Learn with experts from Indias-leading universities.</li>

                <li>Learn the high-impact skills that top companies want.</li>

                <li>Access more then 10+ online courses.</li> */}

 

                                    </ul>

 

 

                                </div>

                            </div>

                        </div>

 

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className=' row gx-0 online-courses datascience' style={{backgroundImage:"../../public/images/Data Science.png"}}>

 

                        <div className='col-lg-7 col-sm-12 courses'>

 

                            <div className='heading ps-5'>

 

                                <div className='content '>

                                    <p className='leader'>The Leader in Online Learning</p>

                                    <span><h1 className='master'>Master the Skills to  <br />  <span>Drive your Career.</span></h1></span>

 

                                    <p className='free'>Free online courses from the Hyderabad's<br></br> leading experts, Join 1700+ learners today.</p>

 

                                    <ul className='lists'>

                                        <li>Access more then 10+ online courses.</li>

                                        <li>Learn with experts from Indias-leading universities.</li>

                                        <li>Learn the high-impact skills that top companies want.</li>

                                        <li>Access more then 10+ online courses.</li>

                                        {/* <li>Learn with experts from Indias-leading universities.</li>

                <li>Learn the high-impact skills that top companies want.</li>

                <li>Access more then 10+ online courses.</li> */}

 

                                    </ul>

 

 

                                </div>

                            </div>

                        </div>

 

                    </div>

                </SwiperSlide>

            </Swiper>

        </>

 

 

 

    )

 

}

 

export default Header

 