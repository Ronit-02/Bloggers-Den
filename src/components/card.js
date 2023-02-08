import '../styles/card.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Card({id, img, category, title, content}) {

  const [isShown, setIsShown] = useState(false);

  function toggleShowDesc(){
    setIsShown(prevShow => !prevShow);
  }

  return (
    <div className='card'>
        <a className='scale__mask' href={`blogpage/${id}`}>
          <img 
              className='card__img'
              src={`/images/blog/${img}`}
              width='300px'
              alt='prop'
          />
        {category &&  <span className='card__cat'>{category}</span>}
        <span className='card__title'>{title}</span>
        <span className='card__show' onClick={toggleShowDesc}>{`show more >`}</span>
        {isShown && <p className='card__content'>{content}</p>}
        </a>

    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string
}

Card.defaultProps = {
  img: 'https://img.freepik.com/premium-photo/happy-woman-sitting-car-traveling-summer-season-sea-resting-special-day-vacation_36577-127.jpg?w=2000',
  category: 'travel'
}