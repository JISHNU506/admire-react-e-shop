import React, { useState,useEffect } from 'react'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import Main from './Main';


export default function Login() {

const navigate=useNavigate()
    const [formv,setFormv]=useState({
        "role":1
    })

const Upload=(ideal)=>{
    ideal.preventDefault()
    
   
    axios.post("https://maitexa.in/water-delivery-api/api/customer-register",formv)
    .then((Upvalue=> {
    console.log("rtnvalue=====>",Upvalue.data.message);
    console.log("rtnsuccc=====>",Upvalue.data.success);
   if (Upvalue.data.success==1) {
    console.log("succ=====>",Upvalue.data);
    toast.success(Upvalue.data.message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate('/signin')
   }
  else 
  {
    console.log("wrng=====>",Upvalue);
    toast.warn(Upvalue.data.message, {
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
            }))
    
    
}





const reg=(e)=>{
    // console.log("key========>",e.target.name);
    // console.log("value========>",e.target.value);
    const {name,value}=e.target

    setFormv({
        ...formv,
        [name]:value,
    })
    console.log("values=======>",formv);
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
            <div className="mb-md-5 mt-md-4 pb-5 "  >
              <h2 className="fw-bold mb-2 text-uppercase" id='loginmar'>Create Your Profile</h2>
              <p className="text-white-50 mb-5">
                Please enter your Valid details!
                    
               
              </p>
              <form onSubmit={Upload}>
                
              
              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  name='name'
                  onChange={reg}
                  id="typePasswordX"
                  className="form-control form-control-lg" 
                  placeholder='Enter your Name'
                />
               
              </div>
              <div className="form-outline form-white mb-4">
                <input
                name='email'
                  type="email"
                  onChange={reg}
                  id="typeEmailX"
                  className="form-control form-control-lg"
                  placeholder='E-mail here'
                />
              
              </div>
              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  name='mobile_number'
                  id="typePasswordX"
                  onChange={reg}
                  className="form-control form-control-lg" 
                  placeholder='Enter the Mobile Number'
                />
               
              </div>
              <div className="form-outline form-white mb-4">
                <input
                name='place'
                onChange={reg}
                  type="text"
                  id="typePasswordX"
                  className="form-control form-control-lg" 
                  placeholder='Enter your Place'
                />
               
              </div>
              <div className="form-outline form-white mb-4">
                <input
                name='post'
                onChange={reg}
                  type="text"
                  id="typePasswordX"
                  className="form-control form-control-lg" 
                  placeholder='Enter your post'
                />
               
              </div>
              <div className="form-outline form-white mb-4">
                <input
                name='pincode'
                  type="text"
                  onChange={reg}
                  id="typePasswordX"
                  className="form-control form-control-lg" 
                  placeholder='Enter your Pincode'
                />
               
              </div>
              <div className="form-outline form-white mb-4">
                <input
                name='password'
                onChange={reg}
                  type="password"
                  id="typePasswordX"
                  className="form-control form-control-lg" 
                  placeholder='Password'
                />
               
              </div>
              <div className="form-outline form-white mb-4">
                <input
                name='city'
                  type="text"
                  onChange={reg}
                  id="typePasswordX"
                  className="form-control form-control-lg" 
                  placeholder='Enter your City'
                />
               
              </div>
             
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="submit" id='btn-10'
              >
                Sign Up
              </button>
              </form>
     
            </div>
            <div id='id-up'>
              <p className="mb-0">
                Already have an account ? 
                <a href="/signin" className="text-white-50 fw-bold">

                &nbsp; Sign in
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
