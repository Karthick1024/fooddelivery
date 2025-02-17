import React, { useContext } from 'react';
import './css/Navbar.css';
import { assets } from '../assets/assets';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Storecontext } from './Storecontext';

const Navbar = ({ setShowlogin }) => {
  const { getTotalcartamount } = useContext(Storecontext);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 sticky-top">
      <div className="container">
        
        <RouterLink to='/'>
          <img src={assets.logo} alt="Logo" className="logo" />
        </RouterLink>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse burger-menu ms-5" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ms-5">
              <RouterLink className="nav-link" to="/">Home</RouterLink>
            </li>
            <li className="nav-item ms-5">
              <ScrollLink
                to="explore-menu"
                smooth={true}
                duration={200}
                className="nav-link"
              >
                Menu
              </ScrollLink>
            </li>
            <li className="nav-item ms-5">
              <ScrollLink
                to="app-download"
                smooth={true}
                duration={200}
                className="nav-link"
              >
                Mobile-App
              </ScrollLink>
            </li>
            <li className="nav-item ms-5">
              <ScrollLink
                to="footer"
                smooth={true}
                duration={200}
                className="nav-link"
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </div>

       
        <div className="search-icon d-flex">
          <img src={assets.search_icon} alt="Search" className="ms-4" />
          <div className="basket-icon">
            <RouterLink to="/cart">
              <img src={assets.basket_icon} alt="Cart" className="ms-5" />
            </RouterLink>
            <div className={getTotalcartamount() === 0 ? '' : 'dot'}></div>
          </div>
          <button
            type="button"
            onClick={() => setShowlogin(true)}
            className="ms-5 btn btn-primary"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
