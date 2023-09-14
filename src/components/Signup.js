
import React from 'react'

import { ChevronLeft } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
 

export const Signup = () => {

    return (

        <>

            <div className='main row gx-0 '>

                <div className=' col-lg-6 col-sm-12'>

                <div className='login-details'>

                    <div className='back mt-3'>

                        <h2 > <ChevronLeft className='icon' size={30} /><Link className='back-link' to='/'> Back</Link> </h2>

                    </div>

                    <div className='techu  m-5'>

                        <img className="logo" src="../images/Logo.png" />

                    </div>

                    <div className='form d-flex justify-content-center '>

                        <div className='w-50'>

                            <h5>Sign Up</h5>

 

                            <form className='d1 mt-5'>

                                <div className='input-box mt-5 '>

                                    <i class="fa  fa-user"></i>

                                    <input className='input-email' type='text' placeholder=' Enter name' />

                                </div>

                                <div className='input-box mt-3'>

                                    <i class="fa  fa-envelope-open"></i>

                                    <input className='input-email' type='email' placeholder=' email' />

                                </div>

                                <div className='input-box mt-3'>

                                    <i class="fa fa-phone"></i>

                                    <input className='input-email' type='number' placeholder=' mobile' />

                                </div>

 

                                <div className='input-box mt-3 '>

                                    <i class="fa  fa-key"></i>

                                    <input className='input-pwd ' type='password' placeholder=' passcode' />

 

 

                                </div>

                             

 

                            </form>

                            <div className='d-flex justify-content-evenly mt-2'>

                                <button className='login-btn  mt-4 ms-5  px-4 py-2 '>Sign Up</button>

                            </div>

 

                        </div>

                    </div>

 

                    <div className=' d-flex justify-content-center mt-2'>

                        <p className='signup '>Already have an account?<a className='signup-btn ps-2' style={{ color: "#C76A97" }}><Link className='login-link' to='/register'>Login</Link></a></p>

                    </div>

                </div>

                </div>

                <div className='col-lg-6 col-sm-12'>

                <div className='loginImg  '>

                    <div className=' loginImg-text  pt-5 ps-5' >

                        <p className='login-imgText m-3 ' >People begin to become successful the minute the decide to be</p>

                    </div>

                    <div className='loginImg-img pb-5 mt-5'>

                        <img className='login-Img ' src="../images/object.png"  width={"90%"} />

                    </div>

                </div>

                </div>

            </div>

        </>

    )

}

 

