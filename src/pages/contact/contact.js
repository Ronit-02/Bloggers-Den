import React from 'react'
import '../../styles/contact.css'

export default function Contact() {
  return (
    <div className='container'>
    <div className="contact">
      
      <div className="contact__header">
        <div>
          <h1>Get in Touch</h1>
          <h3>
            Explore our 
            <a href='help' target='_blank'> Help Docs</a>
            <br/>
            or contact our team.
          </h3>
        </div>
        <img src='images/contact.svg' alt='contact img'/>
      </div>

      <div className='contact__form'>

        <form className='contact__form' method='POST' target='_blank'>
          <fieldset className='contact__name'>
            <div className="contact__firstname">
              <label></label>
              <input placeholder='First name*' autoFocus={true} required></input>
              <span className='error-msg'>Sorry. That is required</span>
            </div>
            <div className="contact__lastname">
              <label></label>
              <input placeholder='Last name*' required></input>
              <span className='error-msg'>Sorry. That is required</span>
            </div>
          </fieldset>
          <fieldset>
            <label></label>
            <input placeholder='Email address*' required></input>
            <span className='error-msg'>Sorry. That is required</span>
          </fieldset>
          <fieldset>
            <label></label>
            <input placeholder='Company name*' required></input>
            <span className='error-msg'>Sorry. That is required</span>
          </fieldset>
          <fieldset>
            <label></label>
            <textarea placeholder='What can we help with?*' rows="4" required></textarea>
            <span className='error-msg'>Sorry. That is required</span>
          </fieldset>

          <button className='contact__submit'>Send</button>
        </form>

      </div>

    </div>
    </div>
  )
}
