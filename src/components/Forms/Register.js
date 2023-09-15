import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RegisterApi } from '../Apis/Api';
import { ChevronLeft } from 'react-bootstrap-icons'
import '../../css/login.css'

const Register = () => {
  const navigate = useNavigate()

  const [validationMessage, setValidationMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const onChangeFormData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((ps) => ({ ...ps, [name]: value }));
  }

  const onSubmitFormData = async () => {
    try {
      const res = await RegisterApi(formData)
      // if (validationMessage === "success") {
      //   navigate('/Register')
      // } else {
      //   navigate('/home')
      // }
    } catch (e) {
      console.log(e);
      setValidationMessage(e.response.data.message);
      console.log(e.response.data.message)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      {/* {validationMessage === "success" ? (
        <h3 style={{ color: "green" }}>Registerd successfully </h3>
      ) : (
        <h3 style={{ color: "red" }}>{validationMessage}</h3>
      )} */}
      <div className='main row gx-0 '>
        <div className=' col-lg-6'>
          <div className='login-details'>
            <div className='back mt-3'>
              <h2 > <ChevronLeft className='icon' size={30} /> <Link to="/"style={{color:"black",textDecorationLine:"none"}}>Back</Link></h2>
            </div>
            <div className='techu  m-5'>
              <img className="logo" src="../images/Logo.png" />
            </div>
            <div className='form d-flex justify-content-center '>
              <div className='w-50'>
                <h5>Sign Up</h5>
                <form className='d1 mt-5' onSubmit={onSubmit}>
                  <div className='input-box mt-5 '>
                    <i class="fa  fa-user"></i>
                    <input className='input-email' type='text' name='name' placeholder=' Enter name' onChange={onChangeFormData} />
                  </div>
                  <div className='input-box mt-3'>
                    <i class="fa  fa-envelope-open"></i>
                    <input className='input-email' type='email' name='email' placeholder=' email' onChange={onChangeFormData} />
                  </div>
                  <div className='input-box mt-3'>
                    <i class="fa fa-phone"></i>
                    <input className='input-email' type='text' name='phoneNumber' placeholder=' mobile' onChange={onChangeFormData} />
                  </div>
                  <div className='input-box mt-3 '>
                    <i class="fa  fa-key"></i>
                    <input className='input-pwd ' type='password' name='password' placeholder=' passcode' onChange={onChangeFormData} />
                  </div>
                </form>
                <div className='d-flex justify-content-evenly mt-2'>
                  <button className='login-btn  mt-4 ms-5  px-4 py-2 ' onClick={onSubmitFormData}>Sign Up</button>
                </div>
              </div>
            </div>
            <div className=' d-flex justify-content-center mt-2'>
              <p className='signup '>Already have an account?<span className='signup-btn ps-2' ><Link to='/login' style={{color:"#C76A97",textDecorationLine:"none"}}>Login</Link></span></p>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='loginImg  '>""
            <div className=' loginImg-text  pt-5 ps-5' >
              <p className='login-imgText m-3 ' >People begin to become successful the minute the decide to be</p>
            </div>
            <div className='loginImg-img pb-5 mt-5'>
              <img className='login-Img ' src="../images/object.png" width={"90%"} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Register