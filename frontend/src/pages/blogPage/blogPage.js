import '../../styles/blogPage.css'

import axios from 'axios'
import { Link, useParams } from 'react-router-dom' 
import { useState, useEffect } from 'react'

export default function BlogPage() {

  const {id} = useParams()
  const [post, setPost] = useState([])
  const PF = "http://localhost:5000/uploads/"

  useEffect(() => { 
    const fetchPost = async () => {
      const res = await axios.get("/posts/" + id)
      setPost(res.data)
    }
    fetchPost()

  }, [id])

  return (
    <div className='blogpost'>
      <div className='blogpost__container'>

        <div className="blogpost__header">
          <h1 className="blogpost__title">{post.title}</h1>
          <div className="blogpost__extras">
            <img className="blogpost__profile" src='/images/profile.jpg' alt='profile pic' />
            <span className='blogpost__author'>
              Written by <b> <Link to={`/?user=${post.username}`}> {post.username} </Link> </b>
            </span>
            <span className="blogpost__date">{new Date (post.createdAt).toDateString() }</span>
          </div>
        </div>


        <div className="blogpost__content">
          <img src={PF + post.photo} alt="blogpostimage" className="blogpost__image" />
          <p>{post.desc}</p>
        </div>

      </div>
    </div>
  )
}
