import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const[text,setText] = useState('')
  const [email,setEmail] = useState('')
  const[pswd, setPswd] = useState('')

const handler=()=>{
  localStorage.setItem('text',text)
  localStorage.setItem('email',email)
  localStorage.setItem('password',pswd)
}

console.log(localStorage)

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' onChange={(e)=>setText(e.target.value)} />
          <input type="email" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Password' onChange={(e)=>setPswd(e.target.value)}/>
        </div>
        <button onClick={handler}>Continue</button>

        {/* <div>
          <div>{localStorage.getItem('text')}</div>
          <div>{localStorage.getItem('email')}</div>
          <div>{localStorage.getItem('password')}</div>
        </div> */}

        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
