import '../../styles/home.css'

import Header from './header'
import Hero from './hero' 
import axios from 'axios'
import { useEffect, useState }from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {

  const [post, setPost] = useState([]);
  const {search} = useLocation()

  useEffect(() => {

    const fetchPost = async () => {
      const res = await axios.get("/posts")
      console.log(res)
      setPost(res.data)
    }

    fetchPost() 
  }, [])
  console.log("hi this is sample stiring")


  return (
    <div className='home__content'>
      <Header />
      <Hero post = {post} />
    </div>
  )
}
