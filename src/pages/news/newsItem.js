import React, { Component } from 'react'
import '../../styles/newsItem.css'

export default class newsItem extends Component {
  render() {

    let {urlToImage, title, description, url} = this.props.item;

    return (
      <div className='newsitem'>
        <img src={urlToImage} alt="news"/>
        <h1>
          {title.length > 60 ? `${title.slice(0,60)}  ..` : title}
        </h1>
        <p>
          {description.length > 110 ? `${description.slice(0,110)}  ..` : description}
        </p>
        <form target="_blank" action={url}>
          <button className='newsitem__button'>Read More</button>
        </form>
      </div>
    )
  }
}
