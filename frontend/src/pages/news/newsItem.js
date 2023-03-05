import React, { Component } from 'react'
import '../../styles/newsItem.css'

export default class newsItem extends Component {
  render() {

    let {urlToImage, title, description, url} = this.props.item;

    return (
      <div className='newsitem'>
        <img src={urlToImage ? urlToImage : "https://cdn.biziday.ro/wp-content/uploads/2022/06/petrol-electric-masini.jpg"} alt="news"/>
        <h1>{title}</h1>
        <p>{description}</p>
        <form target="_blank" action={url}>
          <button className='newsitem__button'>Read More</button>
        </form>
      </div>
    )
  }
}
