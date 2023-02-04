import '../../styles/write.css'

import { useState, useEffect } from 'react';

export default function Write() {
  
  const [text, setText] = useState("");
  const [typing, setTyping] = useState("")

  let words = text.split(" ").length;


  useEffect(() => {
    console.log("mount")
    setTyping("typing...")

    return () => {  
      console.log("unmount")
      setTyping("")
    }
  }, [text])



  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  
  const upperCase = (event) => {
    event.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
  }

  const lowerCase = (event) => {
    event.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
  }

  return (
    <div className='write'>
      
      <form className='write__form'>
          <input className='write__title' type="text" placeholder='Title'/>
          <textarea className='write__text' type="text" placeholder='Tell me your story...' rows="8" value={text} onChange={handleOnChange}/>
          <button className="write__button write__publish">Publish</button>

          <div className="write__info">{typing}</div>

          <div className="write__transform">
            <button className="write__button write__button--upper" onClick={upperCase}>Uppercase</button>
            <button className="write__button write__button--lower" onClick={lowerCase}>Lowercase</button>
          </div>
          <div className="write__info">
            <h3>Analytics</h3>
            <p>
              This story consists of <b>{words}</b> and it will take <b>{0.08 * words}</b> min to read
            </p>
          </div>
      </form>

    </div>
  )
}
