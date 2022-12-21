import React from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating';

export default function Contents(props) {
   
   const navigate= useNavigate()

  return (
    <>
 


<section id='products-1'>
  

  <div id='jp'>
        <div className="container">
  <div className="row">
    <div className="col-md-12">
    <div data-aos="zoom-in-down">
      <h2>
   
        Trending <b>Products</b>
    
      </h2>
      </div>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval={0}>
      
       
          
        
          {/* Produt start */}
          <div className="item" id='tes'>
            <div className="row">
            {props.d.map(item=>(
              <div className="col-12 col-lg-4 col-md-6" id='klm' onClick={()=>navigate(`/singleitem/${item.id}`)} >
                <div className="thumb-wrapper">
                  <div className="img-box">
                    <img
                      src={item.image}
                      className="img-responsive"
                      alt="" 
                      id='ok'
                    />
                  </div>
                  <div className="thumb-content">
                 <marquee width="80%" behavior="" direction="left">  <h4>{item.title} </h4></marquee> 
                    <p className="item-price">
                      <strike>$349.00</strike> <span>{item.price} $</span>
                    </p>
                    <div className="star-rating">
  
                      <ul className="list-inline">
       <Rating
                                          emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" fractions={2} initialRating={item.rating.rate} id="str"/>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
             

            
            </div>
          
        </div>
      
        
      </div>
    </div>
  </div>
</div>

    </div>
</section>

</>

   
  )
}
