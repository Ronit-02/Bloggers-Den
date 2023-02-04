import '../../styles/blogPage.css'
import data from '../../components/data'
import { useParams } from 'react-router-dom' 

export default function BlogPage() {

  const {id} = useParams()

  return (
    <div className='blogpost'>
      <div className='blogpost__container'>

        <div className="blogpost__header">
          <h1 className="blogpost__title">{data[id].title}</h1>
          <div className="blogpost__extras">
            <img className="blogpost__profile" src='/images/profile.jpg' alt='profile pic' />
            <span className='blogpost__author'>Written by <b>Ronit Khatri</b></span>
            <span className="blogpost__date">January 24, 2023</span>
          </div>
        </div>


        <div className="blogpost__content">
          <img src={data[id].coverImg} alt="blogpostimage" className="blogpost__image" />
          
          {data[id].content}

        </div>

      </div>
    </div>
  )
}
