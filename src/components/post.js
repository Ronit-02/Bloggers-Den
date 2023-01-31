import '../styles/post.css'
import PropTypes from 'prop-types'

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

post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string
}

post.defaultProps = {
  img: 'https://img.freepik.com/premium-photo/happy-woman-sitting-car-traveling-summer-season-sea-resting-special-day-vacation_36577-127.jpg?w=2000',
  category: 'travel'
}