import '../../styles/hero.css'
import Card from '../../components/card'
import {data} from '../../components/data'

export default function posts() {

  const cards = data.map(item => {

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
    <div className='posts'>
      <div className='posts__title'>
        <h3>Some Recent Posts</h3>
        <a href='www.google.com'>View more posts</a>
      </div>
      <div className='posts__content'>
        {cards}
      </div>
    </div>
  )
}
