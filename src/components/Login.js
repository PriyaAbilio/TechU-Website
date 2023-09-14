import React from 'react'

import '../css/login.css'

import { ChevronLeft, Facebook, Google } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Login = () => {

    return (

        <>

            <div className='main row gx-0'>

                <div className='col-lg-6 col-sm-12'>

                    <div className='login-details '>

                        <div className='back mt-2'>

                            <h2 > <ChevronLeft className='icon' size={30} /> <Link className='back-link' to='/'> Back</Link> </h2>

                        </div>

                        <div className='techu mt-2 py-5'>

                            <img className="logo" src="../images/Logo.png" />

                        </div>

                        <div className='form d-flex justify-content-center '>

                            <div>

                                <h5 className='login-heading'>Login</h5>

                                <p className='form-p pt-2'>Enter your account details</p>

                                <form className='d1'>

                                    <div className='input-box'>

                                        <i class="fa  fa-envelope-open"></i>

                                        <input className='input-email' type='email' placeholder=' email' />

                                    </div>

 

                                    <div className='input-box'>

                                        <i class="fa  fa-key"></i>

                                        <input className='input-pwd' type='text' placeholder=' passcode' />

 

 

                                    </div>

                                    <a className='forgot' href='' style={{ paddingLeft: '200px' }}>Forgot passcode?</a>

 

                                </form>

                                <div className='d-flex justify-content-evenly'><button className='login-btn mt-5  ms-3  px-5 py-2 '>Login</button></div>

 

                            </div>

                        </div>

 

                        <div className=' login-with d-flex justify-content-center mt-5'>

                            <div className=' facebook '>

                                <button className='facebook-login d-flex align-items-center px-3 py-2'> <i class="fa-brands fa-facebook-f"></i>Login with facebook</button>

                            </div>

                            <div className=' google ms-4 '>

                                <button className=' google-login  d-flex align-items-center px-3 py-2'><i class="fa-brands fa-google"></i>Login with google</button>

                            </div>

                        </div>

                        <div className=' d-flex justify-content-center mt-4 '>

                            <p className='signup '>Don’t have an account?<a className='signup-btn ps-3' href='' style={{ color: "#C76A97" }}> <Link className='signup-link' to='/signup'>Sign Up</Link></a></p>

                        </div>

                    </div>

                </div>

                <div className='col-lg-6 col-sm-12'>

                    <div className='loginImg   '>

                        <div className=' loginImg-text  p-5' >

                            <p className='login-imgText  ' >People begin to become successful the minute they decide to be</p>

                        </div>

                        <div className='loginImg-img pb-5'>

                            <img className='login-Img' src="../images/object.png" width={"90%"} />

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}

 

export default Login