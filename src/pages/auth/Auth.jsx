import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className='auth'>
        <div className='logo-side'>
            <img src={Logo} alt="" />
            <div className="text">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        
        {/* <SignUp /> */}

        < Login />
        
    </div>
  )
}

function SignUp()
{
    return(
        <div className="form-side">

            <form className='signup-form'>

                <h3>Sign Up</h3>

                <div className="name">
                    <input type="text" placeholder='First Name' name="firstName" id="first-name" className='form-input'/>
                    <input type="text" placeholder='Last Name' name="lastName" id="last-name" className='form-input'/>
                </div>

                <div className="username">
                    <input type="text" placeholder='Username' name="username" id="user-name" className='form-input'/>
                </div>

                <div className="password">
                    <input type="password" placeholder='Password' name="pass" id="pass" className='form-input'/>
                    <input type="password" placeholder='Confirm Password' name="confirmPass" id="confirm-pass" className='form-input'/>
                </div>

                <div className="login-link">
                    <span>Already have an account? Login!</span>
                </div>

                <button type="submit" className='button signup-btn'>Sign up</button>
            </form>
        </div>
    )
}

function Login()
{
    return(
        <div className="form-side">

            <form className='signup-form'>

                <h3>Login</h3>

                <div className="username">
                    <input type="text" placeholder='Username' name="username" id="user-name" className='form-input'/>
                </div>

                <div className="password">
                    <input type="password" placeholder='Password' name="pass" id="pass" className='form-input'/>
                </div>

                <div className="login-link">
                    <span>Already have an account? Login!</span>
                </div>

                <button type="submit" className='button signup-btn'>Login</button>
            </form>
        </div>
    )
}

export default Auth