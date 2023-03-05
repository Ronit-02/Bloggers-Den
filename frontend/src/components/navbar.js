import '../styles/navbar.css'

import { Link, NavLink} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import { useState } from 'react'

export default function Navbar(props) {

    const [hamburger, setHamburger] = useState(() => false);

    return (
        <nav className="navbar">

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
                    <input type="checkbox" onClick={() => props.toggleTheme()} />
                    <span className="slider round" ></span>
                </label>
            </div>

            <span className='hamburger' onClick={() => setHamburger((prevState) => !prevState)}>
                <GiHamburgerMenu />
            </span>

        {hamburger && 
        <div className='nav__menu'>
            <RxCross2 className='cross' onClick={() => setHamburger((prevState) => !prevState)}/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/write"> Write </NavLink></li>
                <li><NavLink to="/news"> News </NavLink></li>
            </ul>
        </div>
        }

        </nav>
    )
}