import React from 'react'
import './css/Footer.css'
import {assets} from "../assets/assets";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, molestias? Libero aperiam quia laborum! Sit asperiores explicabo incidunt aperiam exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at vero ipsam, ex eligendi totam repellendus quis magni error molestiae!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>contact@gmail.com</li>
                </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copright 2024 @ Food.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
