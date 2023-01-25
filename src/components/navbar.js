import React from 'react'
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
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>WRITE</li>
                <li>LOGOUT</li>
            </ul>
        </div>

        <div className='navbar__right'>
            <img className='navbar__profile' src='/images/profile.jpg' alt='profile pic'/>
            <img src='/images/search.png' alt='search logo'/>
        </div>
    </div>
  )
}
