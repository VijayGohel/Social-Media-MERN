import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch } from 'react-redux';
import { login, singup } from '../../actions/AuthAction';

const Auth = () => {

    const initialState = { firstName: "",lastName: "",userName: "",password:"",confirmPass:""};

    const [isSignup , setIsSignup]  = useState(true);
    const [passMatched , setPassMatched] = useState(true);
    const [data , setData] = useState(initialState)

    const dispatch = useDispatch();
    
    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(isSignup)
        {
            data.password != data.confirmPass ? setPassMatched(false) : dispatch(singup(data));
        }
        else
        {
            dispatch(login(data))
        }
    }

    const resetForm = ()=>{
        setPassMatched(true);
        setData(initialState);
    }

  return (
    <div className='auth'>

        {/* Left - Side */}

        <div className='logo-side'>
            <img src={Logo} alt="" />
            <div className="text">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        {/* Right - Side */}

        <div className="form-side">

            <form className='signup-form' onSubmit={handleSubmit}>

                <h3>{isSignup ? "Sign Up" : "Login"}</h3>

                { isSignup &&
                    <div className="name">
                        <input type="text" placeholder='First Name' value={data.firstName} onChange={handleChange} name="firstName" id="first-name" className='form-input'/>
                        <input type="text" placeholder='Last Name' value={data.lastName} onChange={handleChange} name="lastName" id="last-name" className='form-input'/>
                    </div>
                }
                <div className="username">
                    <input type="text" placeholder='Username' value={data.userName} onChange={handleChange} name="userName" id="user-name" className='form-input'/>
                </div>

                <div className="password">
                    <input type="password" placeholder='Password' value={data.password} onChange={handleChange} name="password" id="pass" className='form-input'/>
                    { isSignup &&
                        <input type="password" placeholder='Confirm Password' value={data.confirmPass} onChange={handleChange} name="confirmPass" id="confirm-pass" className='form-input'/>
                    }
                </div>
                
                { !passMatched &&
                    <span className="pass-match">*Password does not match!</span>
                }

                <div className="login-link" onClick={()=> {setIsSignup((prev)=>!prev); resetForm()}}>
                    <span>{isSignup ? "Already have an account? Login!" : 
                            "Don't have an account? Signup!"}</span>
                </div>

                <button type="submit" className='button signup-btn'>{isSignup ? "Sign Up" : "Login"}</button>
            </form>
        </div>
        
    </div>
  )
}

export default Auth