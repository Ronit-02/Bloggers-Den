import React from 'react'
import '../../styles/contact.css'

export default function Contact() {

  function clearError() {
    
  }

  function setError() {

  }

  function formValidation(){
    let returnVal = true;
    
    let name = document.forms['contactForm']['fname'].value;
    console.log(name);

    return returnVal;

  }

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

      <div>

        <form action='' name='contactForm' onSubmit={false} className='contact__form' method='POST'>
         
          <fieldset className='name'>
            <div className="fname">
              <input name='fname' placeholder='First name*' autoFocus={true} required></input>
              <span className='error-msg'>Sorry. That is required</span>
            </div>
            <div className="lname">
              <input placeholder='Last name*' required></input>
              <span className='error-msg'>Sorry. That is required</span>
            </div>
          </fieldset>

          <fieldset className='email'>
            <input placeholder='Email address*' required></input>
            <span className='error-msg'>Sorry. That is required</span>
          </fieldset>

          <fieldset className='company'>
            <input placeholder='Company name*' required></input>
            <span className='error-msg'>Sorry. That is required</span>
          </fieldset>

          <fieldset className='message'>
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
