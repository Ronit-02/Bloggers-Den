import '../../styles/login.css'

import axios from 'axios'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
import { useRef, useContext } from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillRocket} from 'react-icons/ai'

export default function Login(props) {

  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    }
    catch(err) {
      dispatch({ type: "LOGIN_FAILURE" })
    }
  } 

  return (
    <div className='login'>
      
      <div className="login__header">
        <AiFillRocket className='logo' />
        <h1>Login</h1>
        <span>Welcome back</span>
      </div>

      <button className="login__button">
        <BsFacebook className='logo'/>
        Login with facebook
      </button>

      <p className='login__separator'>or</p>

      <form action="" className="login__form">
        <label required>Username</label>
        <input type="text" ref={userRef} autoFocus={true} />

        <div className="login__forgot">
          <label>Password</label>
          <a href='forgot'>Forgot your Password?</a>
        </div>
        <input type="password" ref={passwordRef} />

        <button className="login__submit" onClick={handleSubmit} disabled={isFetching}>Login</button>
      </form>

      <div className="login__register">
        <p>Don't have an account? </p>
        <span>
          <Link to="/register">Join Bloggers Den</Link>
        </span>
      </div>

    </div>
  )
}
