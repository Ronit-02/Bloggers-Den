import '../../styles/blogPage.css'

import axios from 'axios'
import { Link, useParams } from 'react-router-dom' 
import { useState, useEffect, useContext } from 'react'
import { Context } from '../../context/Context'
import { MdOutlineDelete } from 'react-icons/md'
import { BiPencil } from 'react-icons/bi'

export default function BlogPage() {

  const {id} = useParams()
  const [post, setPost] = useState({})
  const PF = "https://bloggersden-backend.onrender.com/uploads/"
  const { user } = useContext(Context)
  const [update, setUpdate] = useState(false)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  useEffect(() => { 
    const fetchPost = async () => {
      const res = await axios.get("/posts/" + id)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    fetchPost()

  }, [id])

  const handleDeletePost = async () => {
    try{
      await axios.delete("/posts/" + id, {data:{username: user.username}})
      // redirecting to homepage
      window.location.replace('/')
    } catch(err) {
      console.log(err)
    }
  }

  const handleUpdatePost = () => {
    if(update) setUpdate(false)
    else setUpdate(true)
  }

  const handleUpdate = async () => {
    try{
      console.log(title)
      await axios.put("/posts/" + id, {username: user.username, title:title, desc:desc})
      // reloading page
      window.location.reload()
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='blogpost'>
      <div className='blogpost__container'>

        <div className="blogpost__header">

          { update 
            ? 
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' className='blogpost__title--update' />
            :
            <h1 className="blogpost__title">{title}</h1>
          }

          <div className="blogpost__extras">
            <img className="blogpost__profile" src='/images/profile.jpg' alt='profile pic' />
            <span className='blogpost__author'>
              Written by <b> <Link to={`/?user=${post.username}`}> {post.username} </Link> </b>
            </span>
            <span className="blogpost__date">{new Date (post.createdAt).toDateString() }</span>
            { 
              post.username === user.username &&
              <div className='blogpost__icons'>
                < MdOutlineDelete className='blogpost__delete' onClick={handleDeletePost}/>
                < BiPencil className='blogpost__update' onClick={handleUpdatePost} />
              </div>
            }
          </div>
        </div>

        {
          update 
          ?
          <div className='blogpost__content'>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Enter Description' className='blogpost__content--update' rows="10"/>
          <button onClick={handleUpdate} className='blogpost__button'>Update</button>
          </div>

          :
          <div className="blogpost__content">
            <img src={PF + post.photo} alt="blogpostimage" className="blogpost__image" />
            <p>{post.desc}</p>
          </div>
        }

      </div>
    </div>
  )
}
