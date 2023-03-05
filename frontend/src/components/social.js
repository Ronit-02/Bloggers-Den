import { useState } from 'react';
import '../styles/social.css'

import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


export default function Social() {

  const [btnState, setBtnState] = useState(false);
  
  function toggleShow() {
    setBtnState(prevShow => !prevShow);
  }

  return (
    <div className='social'>
      {btnState &&
        <div className="social__icon">
          <span className='social__icon--fb'><FaFacebookF /></span>
          <span className='social__icon--in'><BsInstagram /></span>
          <span className='social__icon--tw'><BsTwitter /></span>
        </div>
      }
      <button className='social__button' onClick={toggleShow}>{btnState ? "⬆️" : "➡️"}</button>
    </div>
  )
}