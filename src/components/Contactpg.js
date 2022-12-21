import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css';
import { loginCon } from '../Context/LoginDetailsCon';
import { useContext } from 'react';

export default function Contactpg() {
  const {contextstate}=useContext(loginCon)
  console.log(contextstate.id);

// console.log("idvalue======>",idValue);
const [pro,setPro]=useState()

useEffect(()=>{
  const idValue=localStorage.getItem("id")
  console.log("idvalue====>",idValue);
    axios.get(`https://maitexa.in/water-delivery-api/api/get-customer-info/${idValue}`)
    .then(idout=>{
      console.log("idout=====>",idout);
      setPro(idout.data.customer_info)}
    )
    console.log("result========>",pro);
},[])
console.log("resultAFTER========>",pro);
  return (
    <section>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
            <div className="row g-0">
              <div
                className="col-md-4 gradient-custom text-center text-white"
                style={{
                  borderTopLeftRadius: ".5rem",
                  borderBottomLeftRadius: ".5rem"
                }}
              >
                <img
                  src="https://images.assettype.com/nationalherald/2020-11/d9a49a91-eb92-4a03-8111-8ebd18963f14/Shahrukh_Khan.jpg"
                  alt="Avatar"
                  className="img-fluid my-5"
                  style={{ width: 80 }}
                />
                <h5 style={{fontWeight:700}} >{pro?.name}</h5>
                {console.log("html===>",pro)}
                <p>Current User</p>
               
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">{pro?.email}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">{pro?.mobile_number}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Address</h6>
                      <p className="text-muted">{pro?.place}<br/>
                      {pro?.post}<br/>
                      {pro?.pincode}</p>
                    </div>

                  </div>
               
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">

                    <div className="col-6 mb-3">
                   
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
