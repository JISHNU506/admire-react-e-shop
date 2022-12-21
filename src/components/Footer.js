import React from 'react'
import './style.css';

export default function Footer() {
  return (
    <>
  {/* three_box section */}
  <div className="three_box">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="gift_box">
            <i>
              <img src="/images/icon_mony.png" />
            </i>
            <span>Money Back</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gift_box">
            <i>
              <img src="/images/icon_gift.png" />
            </i>
            <span>Special Gift</span>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gift_box">
            <i>
              <img src="/images/icon_car.png" />
            </i>
            <span>Free Shipping</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end three_box section */}
  {/*  footer */}
  <footer>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="inror_box">
              <h3>INFORMATION </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in 
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inror_box">
              <h3>MY ACCOUNT </h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration 
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inror_box">
              <h3>ABOUT</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered 
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inror_box">
              <h3>CONTACTS</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority h
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
</>

  
  )
}
