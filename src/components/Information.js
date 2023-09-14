import React from 'react'
import '../css/information.css'

export default function Information() {
  return (
        <>
            <div className='container-fluid d-flex justify-content-evenly mt-5 '>
                <div className='img1 mt-5 '>
                {/* <img src="../images/que-pic1.png" /> */}
                </div>
                <div className='quires'> 
                        <p className='quires-p'>Queries</p>
                        <h1 className='more'>Get more information</h1>
                        <p className='content mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dsngjdfbgdfnh
                      <p className='content'>sint eaque, cum provident doloribus ipsa quaerat assumenda rerum</p> </p>
                      <button className='contact-btn px-4 py-3 mb-4 mt-4 '>Contact now</button>
                </div>
                <div className='img2 mt-5'>
                {/* <img src="../images/que-pic2.png" /> */}
                </div>

            </div>
        </>
  )
}
