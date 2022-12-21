import React from 'react'
import Item from './Item';

export default function Cartpg(props) {
  console.log("iteee=====>",props.crt);
  const len=props.crt.length
  console.log("length=====>",len);
  
  const totalScores = props.crt.reduce(
  (previousScore, currentScore)=>previousScore+currentScore.price, 
  0);
  console.log(totalScores);


  return (
    <>
<div id='cartcont'>
  

  <table id="cart" className="table table-hover table-condensed">
    <thead>
      <tr>
        <th style={{ width: "50%" }}>Product</th>
        <th style={{ width: "10%" }}>Price</th>
        <th style={{ width: "8%" }}>Quantity</th>
        <th style={{ width: "22%" }} className="text-center">
          Subtotal
        </th>
        <th style={{ width: "10%" }} />
      </tr>
    </thead>
    <tbody>
      {props.crt.map(itm=>(
        <>

<tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-sm-2 hidden-xs">
              <img
                src={itm.image}
                alt="..."
                className="img-responsive"
              />
            </div>
            <div className="col-sm-10">
              <h4 className="nomargin">Product Name</h4>
              <p>
               {itm.title}
              </p>
            </div>
          </div>
        </td>
        <td data-th="Price">$ {itm.price}</td>
        <td data-th="Quantity">
          <input
            type="number"
            className="form-control text-center"
            defaultValue={1}
          />
        </td>
        <td data-th="Subtotal" className="text-center">
        $ {itm.price}
        </td>
        <td className="actions" data-th="">
          <button className="btn btn-info btn-sm">
            <i className="fa fa-refresh" />
          </button>
          <button className="btn btn-danger btn-sm"  onClick={()=>{props.dlt(itm.id)}}>
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
        </>
      ))}

    </tbody>
    <tfoot>
      <tr className="visible-xs">
        <td className="text-center">
          <strong>Total items &nbsp;&nbsp;{props.crt.length}</strong>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/" className="btn btn-warning">
            <i className="fa fa-angle-left" />&nbsp;&nbsp; Continue Shopping
          </a>
        </td>
        <td colSpan={2} className="hidden-xs" />
        <td className="hidden-xs text-center">
          <strong>Total $ {Math.floor(totalScores)}</strong>
        </td>
        <td>
          <a href="#" className="btn btn-success btn-block">
            Checkout&nbsp;&nbsp; <i className="fa fa-angle-right" />
          </a>
        </td>
      </tr>
    </tfoot>
  </table>
  </div>

  
  
 
  
</>
  )
}
