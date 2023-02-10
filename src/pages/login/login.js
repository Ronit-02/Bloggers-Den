import '../../styles/login.css'
import { Link } from 'react-router-dom'

import {BsFacebook} from 'react-icons/bs'
import {AiFillRocket} from 'react-icons/ai'

export default function Login(props) {
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
        <label required>Email</label>
        <input type="text" autoFocus={true} />

        <div className="login__forgot">
          <label>Password</label>
          <a href='forgot'>Forgot your Password?</a>
        </div>

        <input type="text" />
      </form>
      <button className="login__submit" onClick={() => props.toggleUser()}>Login</button>

      <div className="login__register">
        <p>Don't have an account? </p>
        <span>
          <Link to="/register">Join Bloggers Den</Link>
        </span>
      </div>

    </div>
  )
}
