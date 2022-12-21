import React from 'react'
import './style.css';


export default function Main() {
  
  return (
    <>
    <div className='"main-layout"'>
    <>
  <header>
    {/* header inner */}
    <div className="header">
      <div className="header_midil" id='bac'>
        <div className="container" >
          <div className="row d_flex">
            <div className="col-md-4">
              <ul className="conta_icon d_none1">
                
              </ul>
            </div>
            <div className="col-md-4">
              <a className="logo" href="#">
                <img src="/images/logox.png" alt="#" id='log'/>
              </a>
            </div>
            <div className="col-md-4">
              <ul className="right_icon d_none1">
                {/* <li>
                  <a href="#">
                    <img src="/images/shopping.png" alt="#" />
                  </a>{" "}
                </li> */}

             {/* <a href="/cart" className="order">
                Cart
             </a>
             <a href="/profile" className="order" id='profile'>
                Profile
             </a> */}
              </ul> 
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item `">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/signin">
                        LOGIN
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#products-1">
                        Products
                      </a>
                    </li>
                   

                    <li className="nav-item">
                      <a className="nav-link" href="/contact">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/profile">
                        <i className="fas fa-user-alt" style={{ fontSize: 30}} />

                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/cart">
                      <i className="fa fa-shopping-cart" style={{ fontSize: 30}} />
                   

                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* <div className="col-md-4">
              <div className="search"> */}
                {/* <form action="/action_page.php">
                  <input
                    className="form_sea"
                    type="text"
                    placeholder="Search"
                    name="search"
                  />
                  <button type="submit" className="seach_icon">
                    <i className="fa fa-search" />
                  </button>
                </form> */}
{/*                 
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* end header inner */}
  {/* end header */}
</>

    </div>
    </>
  )
}
