import '../styles/card.css'
import PropTypes from 'prop-types'

export default function Card({id, img, category, title, content}) {

  return (
    <div className='card'>
      <a className='scale__mask' href={`blogpage/${id}`}>
        <img 
            className='card__img'
            src={`/images/blog/${img}`}
            width='300px'
            alt='prop'
            />
      </a>
      <span className='card__category'>{category}</span>
      <span className='card__title'>{title}</span>
      <p className='card__content'>{content}</p>
    </div>
  )
}

// Prop Types
Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string
}

// Default Props
Card.defaultProps = {
  img: 'https://img.freepik.com/premium-photo/happy-woman-sitting-car-traveling-summer-season-sea-resting-special-day-vacation_36577-127.jpg?w=2000',
  category: 'blog'
}