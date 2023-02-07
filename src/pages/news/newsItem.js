import React, { Component } from 'react'
import '../../styles/newsItem.css'

export default class newsItem extends Component {
  render() {

    let {img, title, description, url} = this.props;

    return (
      <div className='newsitem'>
        <img src={img} alt="news"/>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={url} target='_blank' rel='noreferrer' className="newsitem__button">Read More</a>
      </div>
    )
  }
}
