import React from 'react'
import './style.css';
import { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom'
import Load from './Load';
import Rating from 'react-rating';

export default function Item(props) {
  const navigate=useNavigate()

    let ItemName=useParams();
    console.log("specitem=====>",ItemName.Items);
    const [itgy,setItgy]=useState({
      loading:true
    });
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${ItemName.Items}`)
        .then((it)=>it.json())
        .then((dt)=>{
          console.log("selecteditemlist=====>",dt);
          setItgy({dt,
        loading:false  });
          console.log("ans=====>",itgy);
        })  
    },[])
     
  return (
    <>
  {itgy.loading==true?<Load/>:<>
  <div className='contaner-fluid' id='flu'>
     
 
    <div className="container-fluid" id='ites'>
    <div className="imgBx">
      <img
        src={itgy.dt.image}
        alt=" Image"
      />
    </div>
    
    <div className="details">
      <div className="content">
      <div data-aos="flip-left">

        <h2>
        {itgy.dt.title} <br />
          <span>Item Description</span>
          
        </h2>
        </div>
        <p id='sap'>

         {itgy.dt.description}
       </p>
       <div data-aos="flip-right">
       <p id='sap'>
       <span>Rating:&nbsp;&nbsp; </span>
       <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" fractions={2} initialRating={itgy.dt.rating.rate} id="str"/>
        
       </p>

  
        
        <h3>Rs. {itgy.dt.price}$</h3>
        <button id='crt' onClick={()=>{props.itc(itgy.dt);navigate("/cart")}}   >Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
  }
  </>
  
  )
}
