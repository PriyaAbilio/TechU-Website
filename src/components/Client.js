import React from 'react'
import "../css/client.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function Client() {
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveclassName: true,
    responsive: {
      0: {
        items: 2,
        // nav: true,
      },
      600: {
        items: 3,
        // nav: true
      },
      1000: {
        items: 7,
        // nav: true,
        // loop:false
      }
    }

  };
  return (
    <>
      <div className='container-fluid mt-5'>
        <h6 className='client-head'>Clients</h6>
        <h1 className='client-text mt-4'>we are collaborate with us</h1>
        <OwlCarousel className="slider-items owl-carousel" style={{ marginTop: "120px" }} {...options}>
          <div className="item-img">
            <img src="../images/img1.png" alt='' />
          </div>
          <div className="item-img" >
            <img src="../images/img2.png" alt='' />
          </div>
          <div className="item-img" >
            <img src="../images/img3.png" alt='' />
          </div>
          <div className="item-img " >
            <img src="../images/img4.png" alt='' />
          </div>
          <div className="item-img" >
            <img src="../images/img1.png" alt='' />
          </div>
          <div className="item-img" >
            <img src="../images/img2.png" alt='' />
          </div>
          <div className="item-img" >
            <img src="../images/img3.png" alt='' />
          </div>
          <div className="item-img" >
            <img src="../images/img4.png" alt='' />
          </div>
        </OwlCarousel>
      </div>
    </>
  )
}
