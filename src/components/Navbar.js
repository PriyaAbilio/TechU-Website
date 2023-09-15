import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'

const Navbar = () => {
    return (
        <div>
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



                                    <a className="anchor-link homez" aria-current="page" href="#"><Link className='home-link' to='/'>Home</Link></a>



                                </li>



                                <li className="nav-item dropdown">



                                    <a className="anchor-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">



                                        Courses



                                    </a>



                                    <ul className="dropdown-menu">



                                        <li><a className="dropdown-item" href="#"><Link style={{color : '#000'}} to='/mernstack'>Mern Stack</Link> </a></li>



                                        <li><a className="dropdown-item" href="#"><Link style={{color : '#000'}} to='/meanstack'>Mean Stack</Link> </a></li>



                                        <li><a className="dropdown-item" href="#"><Link style={{color : '#000'}} to='/datascience'>Data Science</Link> </a></li>



                                        <li><a className="dropdown-item" href="#"><Link style={{color : '#000'}} to='/devops'>DevOps</Link> </a></li>



                                    </ul>



                                </li>



                                <li className="nav-item dropdown">



                                    <a className="anchor-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">



                                        Batches



                                    </a>



                                    <ul className="dropdown-menu">



                                        <li><a className="dropdown-item" href="#"><Link style={{color : '#000'}} to='/upcoming'>Upcoming</Link> </a></li>



                                        <li><a className="dropdown-item" href="#"><Link style={{color : '#000'}} to='/ongoing'>Ongoing</Link></a></li>



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



                                    <a className="anchor-link register-link px-5" href="#"><Link className='registeration-link' to='/signup'>Register</Link></a>



                                </li>



                            </ul>



                        </div>



                    </div>



                </nav>



            </div>
        </div>
    )
}

export default Navbar