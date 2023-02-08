import '../styles/navbar.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

export default function Navbar(props) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    };

  return (
    <div className={`navbar-${theme} navbar`}>
        
        <div className='navbar__left'>

        </div>

        <div className='navbar__center'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/write">Write</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <span onClick={() => props.toggleUser()}><Link to="/">Logout</Link></span>
                </li>
            </ul>
        </div>

        <div className='navbar__right'>
            <img className='navbar__profile' src='/images/profile.jpg' alt='profile pic'/>
            <BsSearch className='navbar__logo' />
            <label className="switch">
                <input type="checkbox" onClick={toggleTheme}/>
                <span className="slider round" ></span>
            </label>
        </div>
    </div>
  )
}
