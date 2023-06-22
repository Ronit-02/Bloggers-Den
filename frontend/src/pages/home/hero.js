import '../../styles/hero.css'

import Card from '../../components/card'

export default function Hero({post}) {

  const PF = "https://bloggersden-backend.onrender.com/uploads/";  

  const cards = post.map(item => {

    return(
      <Card
        key = {item._id}
        id = {item._id}
        title = {item.title}
        category = {item.categories}
        content = {item.desc}
        img = {PF + item.photo}
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
