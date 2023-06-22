import '../../styles/register.css'

import axios from 'axios'
import { BsFacebook } from 'react-icons/bs'
import { AiFillRocket } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Register() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      setError(false)
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        username, email, password
      })

      res.data && window.location.replace("/")
    } 
    catch(err){
      setError(true)
    }
  }

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
        <BsFacebook className='logo' />
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
        <input type="text" onChange={(e) => {setEmail(e.target.value)} }/>
        <label required>Username</label>
        <span className='register__form--light'>(only letters, numbers, and underscores)</span>
        <input type="text" onChange={(e) => {setUsername(e.target.value)} }/>
        <label>Password</label>
        <span className='register__form--light'>(min. 8 char)</span>
        <input type="password" onChange={(e) => {setPassword(e.target.value)} }/>
        <button className="register__submit" onClick={handleSubmit}>Join</button>
        {error && <span style={{color: "red"}}> User Already Exists!! </span>}
      </form>

      <span className='register__form--light'>By joining, you agree to the Terms and Privacy Policy.</span>
    </div>
  )
}
