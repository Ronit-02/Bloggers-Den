import React, { useState } from 'react'
import '../../styles/contact.css'

export default function Contact() {

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    company: "",
    message: "",
    isRobot: false
  })  

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    if(!formData.isRobot){
      console.log("Fill the checkbox please")
      return
    }
    else{
      console.log("We've received your message, Thank You!")
    }
  }

  return (
    <div className='container'>
      <div className="contact">

        <div className="contact__header">
          <div>
            <h1>Get in Touch</h1>
            <h3>Explore our<a href='help' target='_blank'> Help Docs</a> <br /> or contact our team.</h3>
          </div>
          <img src='images/contact.svg' alt='contact img' />
        </div>

        <div>
          <form onSubmit={handleSubmit} name='contactForm' className='contact__form'>

            <fieldset className='name'>
              <div className="fname">
                <input type="text" name='fname' onChange={handleChange} value={formData.fname} placeholder='First name*' autoFocus={true} required />
                <span className='error-msg'>Sorry. That is required</span>
              </div>
              <div className="lname">
                <input type="text" name="lname" onChange={handleChange} value={formData.lname} placeholder='Last name*' required />
                <span className='error-msg'>Sorry. That is required</span>
              </div>
            </fieldset>

            <fieldset className='email'>
              <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='Email address*' required />
              <span className='error-msg'>Sorry. That is required</span>
            </fieldset>

            <fieldset className='company'>
              <input type="text" name='company' onChange={handleChange} value={formData.company} placeholder='Company name*' required />
              <span className='error-msg'>Sorry. That is required</span>
            </fieldset>

            <fieldset className='message'>
              <textarea type="text" name='message' onChange={handleChange} value={formData.message} placeholder='What can we help with?*' rows="4" required />
              <span className='error-msg'>Sorry. That is required</span>
            </fieldset>

            <fieldset className='verify'>
              <input type="checkbox" name='isRobot' onChange={handleChange} checked={formData.isRobot} />
              <label htmlFor='isRobot'>Are you not a robot ?</label>
            </fieldset>

            <button className='contact__submit'>Send</button>
          </form>
        </div>

      </div>
    </div>
  )
}
