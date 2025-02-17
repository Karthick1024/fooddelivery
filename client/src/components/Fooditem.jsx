import React, { useContext } from 'react'
import './css/Fooditem.css'
import { assets } from '../assets/assets'
import { Storecontext } from './Storecontext'

const Fooditem = ({ id, name, price, description, image }) => {

    

    const { cartitems, addtocart, removefromcart } = useContext(Storecontext)

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img src={image} alt="" className="food-item-image" data-aos="flip-left"/>
                {!cartitems[id] ?
                    <img className='add' onClick={() => addtocart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removefromcart(id)} src={assets.remove_icon_red} alt="" />
                        <p className='item-count'>{cartitems[id]}</p>
                        <img onClick={() =>  addtocart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating d-flex justify-content-between align-items-center">
                    <p className='mt-3'>{name}</p>
                    <img src={assets.rating_starts} alt="" className="" />
                </div>
                <p className="food-item-desc">
                    {description}
                </p>
                <p className="food-item-price">
                    ₹{price}
                </p>
            </div>

        </div>
    )
}

export default Fooditem
