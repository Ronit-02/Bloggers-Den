import '../styles/navbar.css'

import { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

export default function Navbar(props) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    };

    return (
        <div className={`navbar-${theme} navbar`}>

            <div className='navbar__left'>
                <h2>Bloggers Den</h2>
            </div>

            <div className='navbar__center'>
                <NavLink 
                    to="/" 
                    className={ ({isActive}) => (isActive ? "activeLink" : "")}>
                    Home
                </NavLink>
                <NavLink 
                    to="/about"
                    className={ ({isActive}) => (isActive ? "activeLink" : "")}>
                    About
                </NavLink>
                <NavLink 
                    to="/contact"
                    className={ ({isActive}) => (isActive ? "activeLink" : "")}>
                    Contact
                </NavLink>
                <NavLink 
                    to="/write"
                    className={ ({isActive}) => (isActive ? "activeLink" : "")}>
                    Write
                </NavLink>
                <NavLink 
                    to="/news"
                    className={ ({isActive}) => (isActive ? "activeLink" : "")}>
                    News
                </NavLink>
                <span onClick={() => props.toggleUser()}>
                    <Link 
                        to="/">
                        Logout
                    </Link>
                </span>
            </div>

            <div className='navbar__right'>
                <img className='navbar__profile' src='/images/profile.jpg' alt='profile pic' />
                <BsSearch className='navbar__logo' />
                <label className="switch">
                    <input type="checkbox" onClick={toggleTheme} />
                    <span className="slider round" ></span>
                </label>
            </div>
        </div>
    )
}
