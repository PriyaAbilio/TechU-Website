import React from 'react'

 

import { Link } from 'react-router-dom'

import '../css/header.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

 

 

 

 

 

 

 

const Header = () => {

 

    return (

 

 

        <>

            <div className='container-fluid navbar sticky-top w-100 p-0'>

 

                <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 p-4 ">

 

                    <div className="container-fluid ms-5 ">

 

                        <img src="../images/Logo.png" />

 

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">

 

                            <span className="navbar-toggler-icon"></span>

 

                        </button>

 

                        <div className="collapse navbar-collapse px-5" id="navbarNavDropdown">

 

                            <ul className="navbar-nav ms-auto ">

 

                                <li className="nav-item">

 

                                    <a className="anchor-link homez" aria-current="page" href="#">Home</a>

 

                                </li>

 

                                <li className="nav-item dropdown">

 

                                    <a className="anchor-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

 

                                        Courses

 

                                    </a>

 

                                    <ul className="dropdown-menu">

 

                                        <li><a className="dropdown-item" href="#">Mern Stack</a></li>

 

                                        <li><a className="dropdown-item" href="#">Mean Stack</a></li>

 

                                        <li><a className="dropdown-item" href="#">Data Science</a></li>

 

                                        <li><a className="dropdown-item" href="#">Devops</a></li>

 

                                    </ul>

 

                                </li>

 

                                <li className="nav-item dropdown">

 

                                    <a className="anchor-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

 

                                        Batches

 

                                    </a>

 

                                    <ul className="dropdown-menu">

 

                                        <li><a className="dropdown-item" href="#">Mern Stack</a></li>

 

                                        <li><a className="dropdown-item" href="#">Mean Stack</a></li>

 

                                        <li><a className="dropdown-item" href="#">Data Science</a></li>

 

                                        <li><a className="dropdown-item" href="#">Devops</a></li>

 

                                    </ul>

 

                                </li>

                                <li className="nav-item">

 

                                    <a className="anchor-link" aria-current="page" href="#">Internship</a>

 

                                </li>

 

                                <li className="nav-item dropdown">

 

                                    <a className=" anchor-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

 

                                        Services

 

                                    </a>

 

                                    <ul className="dropdown-menu">

 

                                        <li><a className="dropdown-item" href="#">Work Support</a></li>

 

                                        <li><a className="dropdown-item" href="#">Mentorshop</a></li>

 

 

 

                                    </ul>

 

                                </li>

 

                                <li className='nav-item'>

 

                                    <a className="anchor-link register-link px-5" href="#"><Link className='registeration-link' to='register'>Register</Link></a>

 

                                </li>

 

                            </ul>

 

                        </div>

 

                    </div>

 

                </nav>

 

            </div>

 

 

 

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

 