import React from 'react'

import "../css/footer.css"
import { EnvelopeOpen, Facebook, Instagram, Linkedin, Phone, Telephone, Twitter, Whatsapp } from 'react-bootstrap-icons'

export const Footer = () => {

    return (

        <div className='container-fluid footer '>
            <div className='m-5'>
                <div className='row ftr py-3 px-5'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3  mt-5 footer1'>
                        <img src='../images/Group.png' alt='' style={{ width: '90px' }} />
                        <h5 className="techu" style={{ width: '83.12px' }}>Tech<span style={{ color: 'grey' }} >U</span> </h5>
                        <div className='footer-icons mt-4 w-50'>
                          <Whatsapp/>
                          <Linkedin/>
                          <Twitter/>
                          <Facebook/>
                          <Instagram/>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3  mt-5 footer2'>
                        <h2 className='w-75'>SUPPORT</h2>
                        <div className='ft1 pt-2 '>
                            <p>About us</p>
                            <p>FAQ's</p>
                            <p>Newsletters</p>
                            <p>Gallery</p>
                            <p>Contact us</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3  mt-5 footer3'>
                        <h2 className='w-75'>COURSES</h2>
                        <div className='ft2 pt-2'>
                            <p>Learn Development</p>
                            <p>Digital Marketing</p>
                            <p>Business Analysis</p>
                            <p>Front-End Development</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3  mt-5 footer4 '>
                        <h2 className='w-75'>LOCATION</h2>
                        <div className='ft3 row pt-2 w-75'>
                            <p>#303B Images Capital Park, <br />Silicon Valley, Madhapur,<br /> Hyderabad - 500081</p>
                            <p><EnvelopeOpen className='me-3'/> info@techu.com</p>
                            <p><Telephone className='me-3' /> 040-40050678</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' row gx-0 copyright mt-5 mx-5 '>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 cpyryt '>
                    <p>Copyright &copy; 2023 TechU All Rights Reserved</p>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 conditions '>
                    <p className='p1'>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>

    )
}