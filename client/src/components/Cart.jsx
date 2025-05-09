import React, { useContext , useEffect} from 'react'
import './css/Cart.css'
import { Storecontext } from './Storecontext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cartitems, food_list, removefromcart,getTotalcartamount } = useContext(Storecontext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (

              <div>
                <div className="cart-items-title cart-items-item">

                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>{item.price * cartitems[item._id]}</p>
                  <p onClick={() => removefromcart(item._id)} className='cross' >X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a Promocode , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
