import '../../styles/write.css'

import { useState, useEffect } from 'react';

export default function Write() {

  // state variables
  const [blog, setBlog] = useState(() => JSON.parse(localStorage.getItem('blog')) || { title: "", story: "" })

  // local storage data
  useEffect(() => {
    localStorage.setItem('blog', JSON.stringify(blog))
  }, [blog])

  const title = blog.title
  const story = blog.story

  // calculating time to read
  let words = story.split(" ").length;
  let time = (0.08 * words).toFixed(1);

  function handleOnChange(event) {
    const { name, value } = event.target
    setBlog((prevBlog) => {
      return { 
        ...prevBlog, 
        [name]: value 
      }
    })
  }

  // text transformations
  function upperCase() {
    let newstorytext = story.toUpperCase();
    setBlog((prevBlog) => {
      return { ...prevBlog, story: newstorytext }
    })
  }

  function lowerCase() {
    let newstorytext = story.toLowerCase();
    setBlog((prevBlog) => {
      return { ...prevBlog, story: newstorytext }
    })
  }

  function clear() {
    setBlog((prevBlog) => {
      return { ...prevBlog, story: "" }
    })
  }

  return (
    <div className='write'>

      <form className='write__form'>
        <input name='title' className='write__title' type="text" placeholder='Title' value={title} onChange={handleOnChange} />
        <textarea name='story' className='write__text' type="text" placeholder='Tell me your story...' rows="8" value={story} onChange={handleOnChange} />
      </form>

      {story && <>
        <div className="write__button">
          <div className="write__button--transform">
            <button onClick={upperCase}>UPPERCASE</button>
            <button onClick={lowerCase}>lowercase</button>
            <button onClick={clear}>Clear</button>
          </div>
          <div>
            <button className="write__button--publish">Publish</button>
          </div>
        </div>

        <div className="write__info">
          {words} words, {time} mins read
        </div>
      </>}

    </div>
  )
}
