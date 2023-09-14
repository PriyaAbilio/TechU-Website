import React from 'react'
import '../css/aboutus.css'

const Aboutus = () => {
    return (
        <>
            <div class="container-fluid mycontainer ">

                <div class="sub-container row">
                    <div class=" col-lg-6 col-sm-12 wrapperbox">
                        <div class="box framebox ">
                            
                        </div>
                        <div class="box imagebox">
                            <img src="/images/about-3-1 1.png" alt="image not found" width="95%" height="645" />
                            <div class="circle-containter">
                                <span class="circle "></span>
                                <span class="circle"></span>
                                <span class="circle"></span>
                                <span class="circle"></span>
                            </div>

                        </div>
                        <div class="box fillbox">

                        </div>


                    </div>
                    <div class="col-lg-6 col-sm-12 part2">
                        <h6 className='sub-heading '>About us</h6>
                        <h1 className='aboutus-heading mt-4'>Increase your expertise in <br />planning Career, Job life.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                             et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                             lacus vel facilizes.
                        </p>
                       
                            <div className='d-flex justifiy-content-evenly mt-5'>
                                <div className='w-50 '><img src='/images/rocket.png' /> <sapn className=' names px-4'>Consistency</sapn></div>
                                <div className='w-50'><img src='/images/clock.png' /> <sapn  className=' names px-4'>Improvemwnt</sapn></div>
                            </div>
                            <div className='d-flex justifiy-content-evenly mt-5'>
                                <div className='w-50'><img src='/images/videocall.png' /> <sapn className=' names px-4'>Online Learning</sapn></div>
                                <div className='w-50'><img src='/images/certificate.png' /> <sapn className=' names px-4'>certificate</sapn></div>
                            </div>
                        <button className='more-btn mt-5 px-4 py-2'>Know More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutus