import React, { useContext } from 'react'
import './css/Placeorder.css'
import { Storecontext } from './Storecontext'

const Placeorder = () => {

const {getTotalcartamount} = useContext(Storecontext)

  return (
    <>
    <form className='placeorder'>
    <div className="placeorder-left">
        <p className="title">
            Delivery Information
        </p>
        <div className="multi-fields">
            <input type="text" placeholder='FirstName' />
            <input type="text" placeholder='LastName'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='street' />
        <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Zipcode' />
            <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='phone'/>

    </div>
    <div className="placeorder-right">
    <div className="cart-total">
          <h2>Cart Totals : </h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalcartamount() === 0?0:20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalcartamount() === 0?0:getTotalcartamount()+20}</b>
              
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
    </div>
  </form>
  </>
  )
}

export default Placeorder
