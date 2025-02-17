import React, { useState } from 'react'
import './Login.css'
import { assets } from '../assets/assets'

const Login = ({ setShowlogin }) => {


    const [currentstate, setCurrentstate] = useState("Login")
    return (
        <div className='login'>
            <form className='login-container'>
                <div className="login-title">
                    <h2>{currentstate}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowlogin(false)} alt="" />
                </div>
                <div className="login-input">
                    {currentstate === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='********' required />
                </div>
                <button>
                    {currentstate === "Sign up" ? "Create account" : "Login"}
                </button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of user & privacy policy.</p>
                </div>
                {currentstate === "Login" ? <p>Create a  new account? <span onClick={() => setCurrentstate("Sign up")}>Click here</span></p> : <p>Already have an acoount <span onClick={() => setCurrentstate("Login")}>Login here</span></p>}


            </form>

        </div>
    )
}

export default Login
