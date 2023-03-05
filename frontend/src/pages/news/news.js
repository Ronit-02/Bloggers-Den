import React, { Component } from 'react'
import '../../styles/news.css'

import NewsItem from './newsItem'

export default class news extends Component {

  state = {
    data: null,
    page: 1
  }

  async componentDidMount() {
    try{        
      const url = `https://newsapi.org/v2/everything?q=football&sortBy=publishedAt&apiKey=365fc97dd10441989d8dd9025d84517b&page=1&pageSize=20&language=en`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({
        data: parsedData.articles,
        totalArticles: parsedData.totalResults
      });
    }
    catch(e) {  
        console.log("something is not working");
    }
  }

  handleClickPrevious = async () => {
    const url = `https://newsapi.org/v2/everything?q=football&sortBy=publishedAt&apiKey=365fc97dd10441989d8dd9025d84517b&page=${this.state.page - 1}&pageSize=20&language=en`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      data: parsedData.articles,
      page: this.state.page - 1
    })
  }

  handleClickNext = async () => {
    const url = `https://newsapi.org/v2/everything?q=football&sortBy=publishedAt&apiKey=365fc97dd10441989d8dd9025d84517b&page=${this.state.page + 1}&pageSize=20&language=en`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState(prevState => {
      return {
        data: parsedData.articles,
        page: prevState.page + 1
      }
    })
  }


  render() {

    const newsElement = this.state.data ?
      this.state.data.map((item) => {
        return (
          <NewsItem
            key = {item.url}
            item = {item}
          />
        )
      }) :
      null

    return (
      <div className='news'>
        <h1 className='news__header'>Football Latest News</h1>
        <div className="news__content">
          {newsElement || "Loading..."}
        </div>
        <div className="news__pages">
          {this.state.page > 1 ? 
            <button onClick={this.handleClickPrevious}> &larr; Prev</button> : 
            <div></div>}

          <p>
            {this.state.page}
          </p>  

          {Math.ceil(this.state.totalArticles/20) > this.state.page + 1 ? 
            <button onClick={this.handleClickNext}>Next &rarr;</button> : 
            <div></div>}
        </div>
      </div>
    )
  }
}
