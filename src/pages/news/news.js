import React, { Component } from 'react'
import '../../styles/news.css'

import { newsData } from '../../components/newsData';
import NewsItem from './newsItem'

export default class news extends Component {

  constructor() {
    super();
    this.state = {
      loading: false
    }
  }

  // const newsElement = newsData.map((item) => {
  //   return (
  //     <NewsItem
  //       key = {item.url}
  //       item = {item}
  //     />
  //   )
  // })

  render() {
    return (
      <div className='news'>
        <h1 className='news__header'>Latest News</h1>

        <div className="news__content">

          {newsData.map((item) => {
            return (
              <NewsItem
                key = {item.url}
                item = {item}
              />
            )
          })}

        </div>
      </div>
    )
  }
}
