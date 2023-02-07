import '../../styles/write.css'
import { useState } from 'react';


export default function Write() {

  const [text, setText] = useState("");
  let words = text.split(" ").length;

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  return (
    <div className='write'>

      <form className='write__form'>
        <input className='write__title' type="text" placeholder='Title' />
        <textarea className='write__text' type="text" placeholder='Tell me your story...' rows="8" value={text} onChange={handleOnChange} />
      </form>

      {/* Display only when there's text inside */}
      {text &&
        <>
          <div className="write__button">
            <div className="write__button--transform">
              <button onClick={upperCase}>UPPERCASE</button>
              <button onClick={lowerCase}>lowercase</button>
            </div>
            <div>
              <button className="write__button--publish">Publish</button>
            </div>
          </div>

          <div className="write__info">
            {words} words, {Math.floor(0.08 * words)} mins read
          </div>
        </>
      }

    </div>
  )
}
