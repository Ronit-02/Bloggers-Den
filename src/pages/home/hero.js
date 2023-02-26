import '../../styles/hero.css'
import Card from '../../components/card'
import {blogData} from '../../components/blogData'

export default function Hero() {

  const cards = blogData.map(item => {

    return(
      <Card
        key = {item.id}
        id = {item.id}
        img = {item.coverImg}
        category = {item.category}
        title = {item.title}
        content = {item.content}
      />
    )
  })

  return (
    <div className="hero">
      <div className='hero__header'>
        <h3>Some Recent Posts</h3>
        <a href='www.google.com'>View more posts</a>
      </div>
      <div className='hero__content'>
        {cards}
      </div>
    </div>
  )
}
