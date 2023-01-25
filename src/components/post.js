import '../styles/post.css'

export default function post({img, category, title, content}) {
  return (

    <div className='post'>
        <div className='scale__mask'>
          <img 
              className='post__img'
              src={img}
              width='300px'
              alt='prop'
          />
        </div>
        <span className='post__cat'>{category}</span>
        <span className='post__title'>{title}</span>
        <p className='post__content'>{content}</p>

    </div>
  )
}
