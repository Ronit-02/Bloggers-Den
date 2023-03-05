import '../../styles/register.css'
import { Link } from 'react-router-dom'

import {BsFacebook} from 'react-icons/bs'
import {AiFillRocket} from 'react-icons/ai'

export default function register() {
  return (
    <div className='register'>
      
      <div className="register__header">
        <AiFillRocket className='logo' />
        <h1>Join Blogger's Den</h1>

        <div className='register__account'>
            <p>Already have an account?</p>
            <span>
                <Link to="/" >Login</Link>
            </span>
        </div>

      </div>

      <button className="register__join">
        <BsFacebook className='logo'/>
        Join with facebook
      </button>

      <p className='register__separator'>or</p>

      <form action="" className="register__form">

        <div className="register__form__name">
            <div>
                <label required>First Name</label>
                <input type="text" autoFocus={true} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" />
            </div>
        </div>

        <label required>Email</label>
        <input type="text" />

        <label required>Username</label>
        <span className='register__form--light'>(only letters, numbers, and underscores)</span>
        <input type="text" />

        <label>Password</label>
        <span className='register__form--light'>(min. 8 char)</span>
        <input type="text" />
        
        <button className="register__submit">Join</button>
      </form>

    <span className='register__form--light'>By joining, you agree to the Terms and Privacy Policy.</span>

    </div>
  )
}
