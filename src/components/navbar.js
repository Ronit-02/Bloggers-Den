import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
  return (

    <div className='navbar'>
        
        <div className='navbar__left'>
            <img src='/images/facebook.png' alt='facebook logo'/>
            <img src='/images/instagram.png' alt='instagram logo'/>
            <img src='/images/twitter.png' alt='twitter logo'/>
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
                    <Link to="/login">Logout</Link>
                </li>
            </ul>
        </div>

        <div className='navbar__right'>
            <img className='navbar__profile' src='/images/profile.jpg' alt='profile pic'/>
            <img src='/images/search.png' alt='search logo'/>
        </div>
    </div>
  )
}
