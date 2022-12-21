import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import { loginCon } from '../Context/LoginDetailsCon';
import { useContext } from 'react';

import 'react-toastify/dist/ReactToastify.css';

export default function Loginpg() {
  const {SetContextstate,contextstate}=useContext(loginCon)
  const [logvalue,Setlogvalue]=useState()
const navigate=useNavigate()

const acc=(event)=>{
  event.preventDefault()
  axios.post("https://maitexa.in/water-delivery-api/api/login",logvalue)
  .then(res=>{console.log("resp=====>",res.data)
  if (res.data.success==1) {
    
  SetContextstate({id:res.data.loginid})
  console.log("contextstate===>",contextstate);
  localStorage.setItem("id",JSON.stringify(res.data.loginid))
  navigate("/")
  }
else{
  toast.error(res.data.message,{
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    
}


})
}






const log=(l)=>{
  console.log("logkey=====>",l.target.name);
  console.log("logvalue=====>",l.target.value);
  const {name,value}=l.target
  Setlogvalue({
    ...logvalue,
    [name]:value
  })
  console.log("logvkkkk=====>",logvalue);
  
}


  return (
    <>
<div id='CONT'>
  

  <div className="container py-5 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div
          className="card  text-white" id='CARD1'
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-body p-5 text-center">
            <form onSubmit={acc}>
              
         
            <div className="mb-md-5 mt-md-4 pb-5" id='pading1'>
              <h2 className="fw-bold mb-2 text-uppercase" id='loginmar'>Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="typeEmailX"
                  name='username'
                  className="form-control form-control-lg"
                  placeholder='E-mail here'
                  onChange={log}
                />
                <label className="form-label" htmlFor="typeEmailX">
                  Email
                </label>
              </div>
              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  name='password'
                  id="typePasswordX"
                  className="form-control form-control-lg" 
                  placeholder='password-here'
                  onChange={log}
                />
                <label className="form-label" htmlFor="typePasswordX">
                  Password
                </label>
              </div>
              <p className="small mb-5 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="submit" id='btn-10'
              >
                Sign In
              </button>
     
            </div>
            </form>
            <div id='id-up'>
              <p className="mb-0">
                Don't have an account ? &nbsp; 
                <a href="signup" className="text-white-50 fw-bold">
                  &nbsp;Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ToastContainer />
</div>



  </>
  
  )
}
