import React from 'react'
import '../styles/footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

export default function footer() {
  return (
    <div className='footer'>

      <div className="footer__main">

        <h1 className='footer__title'>Bloggers Den</h1>

        <div className="footer__column">
          <h1 className='footer__column--title'>Company</h1>
          <a href='about' className='footer__column--value'>About Us</a>
          <a href='careers' className='footer__column--value'>Careers</a>
        </div>

        <div className="footer__column">
          <h1 className='footer__column--title'>Contact</h1>
          <a href='ronit' className='footer__column--value'>Ronit Khatri</a>
        </div>

        <div className="footer__column">
          <h1 className='footer__column--title'>Get Help</h1>
          <a href='help' className='footer__column--value'>Help Docs</a>
          <a href='dev' className='footer__column--value'>Developers</a>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="footer__copyright--left">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
        <span className='footer__copyright--right'>
          Copyright © 2023 Ronit | All rights reserved |  
          <span className='footer__copyright--right--light'> @ Bloggers Den</span>
        </span>
      </div>

    </div>
  )
}
