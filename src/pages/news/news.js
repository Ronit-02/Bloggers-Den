import React, { Component } from 'react'
import NewsItem from './newsItem'
import '../../styles/news.css'
import { newsData } from '../../components/newsData';

export default class news extends Component {

  constructor() {
    super();
    this.state = {
      loading: false
    }
  }

  render() {
    return (
      <div className='news'>
        <h1 className='news__header'>Latest News</h1>

        <div className="news__content">

          {newsData.map((element) => {
            return (
              <NewsItem
                img={element.urlToImage}
                title={element.title}
                description={element.description}
                url = {element.url}
              />
            )
          })}

        </div>
      </div>
    )
  }
}
