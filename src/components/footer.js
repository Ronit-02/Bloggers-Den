import React from 'react'
import '../styles/footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

export default function footer() {
  return (
    <div className='footer'>

      <div className="footer__content">
        <h1 className='footer__title'>Bloggers Den</h1>

        <div className="footer__container">
          <h1 className='footer__heading'>Company</h1>
          <a href='about' className='footer__value'>About Us</a>
          <a href='careers' className='footer__value'>Careers</a>
        </div>

        <div className="footer__container">
          <h1 className='footer__heading'>Contact</h1>
          <a href='ronit' className='footer__value'>Ronit Khatri</a>
        </div>

        <div className="footer__container">
          <h1 className='footer__heading'>Get Help</h1>
          <p className='footer__value'>Help Docs</p>
          <p className='footer__value'>Developers</p>
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
