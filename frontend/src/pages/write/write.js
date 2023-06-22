import '../../styles/write.css'

import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/Context';

export default function Write() {

  const [blog, setBlog] = useState(() => JSON.parse(localStorage.getItem('blog')) || { title: "", story: "" })
  const [file, setFile] = useState(null)
  const {user} = useContext(Context)

  const title = blog.title
  const story = blog.story

  useEffect(() => {
    localStorage.setItem('blog', JSON.stringify(blog))
  }, [blog])

  // Story Submission
  const handlePublish = async (e) => {
    e.preventDefault()

    const newPost = {
      title: title,
      desc: story,
      username: user.username
    }

    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name   // to prevent duplicate images
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename
      try{
        await axios.post(`${process.env.REACT_APP_API_URL}/upload`, data)
      } 
      catch(err){ }
    }

    try{
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts/`, newPost)
      window.location.replace("/post/" + res.data._id)
    }
    catch(err) { }

    localStorage.removeItem("blog");
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setBlog((prevBlog) => {
      return { 
        ...prevBlog, 
        [name]: value 
      }
    })
  }

  // Time to Read
  let words = story.split(" ").length;
  let time = (0.08 * words).toFixed(1);

  // TRANSFORMATIONS
  const upperCase = () => {
    let newstorytext = story.toUpperCase();
    setBlog((prevBlog) => {
      return { ...prevBlog, story: newstorytext }
    })
  }
  const lowerCase = () => {
    let newstorytext = story.toLowerCase();
    setBlog((prevBlog) => {
      return { ...prevBlog, story: newstorytext }
    })
  }
  const clear = () => {
    setBlog((prevBlog) => {
      return { ...prevBlog, story: "" }
    })
  }

  return (
    <div className='write'>

      { file && <img className='write__img' src={URL.createObjectURL(file)} alt="" /> }

      <form className='write__form'>
        <input name='title' className='write__title' type="text" placeholder='Title' value={title} onChange={handleOnChange} />
        <label htmlFor="filePicker" className='write__file'>
          +
        </label>
        <input id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={(e) => setFile(e.target.files[0])}></input>
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
            <button type='submit' className="write__button--publish" onClick={handlePublish}>Publish</button>
          </div>
        </div>

        <div className="write__info">
          {words} words, {time} mins read
        </div>
      </>}

    </div>
  )
}
