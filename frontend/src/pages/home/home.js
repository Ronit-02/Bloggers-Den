import '../../styles/home.css'

import Header from './header'
import Hero from './hero' 
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const [post, setPost] = useState([]);
  // for fetching related posts (user, category wise)
  // const {search} = useLocation()

  useEffect(() => {

    const fetchPost = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/`)
      setPost(res.data)
    }

    fetchPost() 
  }, [])

  return (
    <div className='home__content'>
      <Header />
      <Hero post = {post} />
    </div>
  )
}
