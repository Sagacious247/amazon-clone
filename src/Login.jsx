import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, email, password)
    if(auth) {
      navigate("/")
    }
  }

  const register = async (e) => {
    e.preventDefault()

    try{
      await createUserWithEmailAndPassword(auth, email, password)
      if(auth){
        navigate('/')
      }

    } catch(error){
      console.log(error)
    }

  }

  return (
    <div className='login'>
      <Link to="/">
      <img 
      className='login__logo'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

         <h5>Password</h5>
          <input type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit'
          onClick={signIn}
          className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions 
          of Use & Sale. Please see our Privacy Notice, our Cookies Notice 
          and our Interest-Based Ads Notice.
        </p>

        <button
        onClick={register}
        className='login__registerButton' >Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
