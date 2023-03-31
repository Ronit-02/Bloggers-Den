import '../styles/card.css'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({ id, title, category, content, img}) {

  return (
  <div className='card'>

    <div className='card__header'>
    < Link to={`/post/${id}`} > 
      <div className='scale__mask'>
        <img 
            className='card__img'
            src={img}
            width='300px'
            alt='prop'
        />
      </div>
    </Link>
    </div>

    <div className="card__body">
      {category.map((c) => {
        return(
          <span key={c} className='card__category'>{c}</span>
        )
      })}
      <div className='card__title'>{title}</div>
      <p className='card__content'>{content}</p>
    </div>

  </div>
  )
}

// Prop Types
Card.propTypes = {
  title: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  // category: PropTypes.string
}

// Default Props
Card.defaultProps = {
  img: 'https://img.freepik.com/premium-photo/happy-woman-sitting-car-traveling-summer-season-sea-resting-special-day-vacation_36577-127.jpg?w=2000',
  category: 'blog'
}