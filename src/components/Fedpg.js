import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';


export default function Fedpg() {
 const navigate= useNavigate()
  return (
<>
  {/* banner */}
  <section className="banner_main">
    <div className="container">
      <div className="row">
        
        <div className="col-md-8">
          <div className="text-bg">
          <div data-aos="flip-left">
            <h1>
           
              <span className="blodark"> Admire </span> <br />
              LE STYLIST
            </h1>
            <p>A huge fashion collection for ever </p>
            <a className="read_more" href="#">
              Shop now
            </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ban_img">
            <figure>
              {/* <img src="" alt="#" /> */}
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end banner */}
  {/* six_box section */}
  <div data-aos="flip-down">

  <div className="six_box">
    <div className="container-fluid ">
      <div className="row justify-content-center" id='cat'>
        <div className="col-md-2 col-sm-4 pa_left" id='cat1'>
        <div data-aos="zoom-in-left"></div>
          <div className="six_probpx yellow_bg" id='electronic' onClick={()=>navigate("/catagory/men's clothing")} >
          
            <span>men's wear</span>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 pa_left" id='cat1'>
          <div className="six_probpx bluedark_bg" id='el' onClick={()=>navigate("/catagory/electronics")}>
            
            <span>electronics</span>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 pa_left" id='cat1'  onClick={()=>navigate("/catagory/jewelery")}>
          <div className="six_probpx yellow_bg" id='je'>
           
            <span>jewellery</span>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 pa_left">
          <div className="six_probpx bluedark_bg" id='la'  onClick={()=>navigate("/catagory/women's clothing")}>
            
            <span>Ladies Ciollection</span>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  </div>
  {/* end six_box section */}
  {/* project section */}
</>

  )
}
