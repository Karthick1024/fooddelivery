import React,  { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Placeorder from './components/Placeorder'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from './components/Footer'
import Login from './pages/Login'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);


const [showlogin,setShowlogin] = useState(false)


  return (
    <>
    {showlogin?<Login setShowlogin={setShowlogin}/>:<></>}
    <div className='app'>
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
