import React from 'react'
import './css/Header.css'

const Header = () => {
  return (
    <div className="header mt-5" data-aos="flip-left" data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <div className="header-contents d-flex position-absolute flex-column align-items-start">
        <h2 className='text-white'>Order your favourite Food Here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
        <button >View Menu</button>
      </div>
    </div>
  )
}

export default Header
