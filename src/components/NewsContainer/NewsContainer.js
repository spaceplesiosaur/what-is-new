import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js';

class NewsContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  renderNewsArticles() {
    return this.props.articleList.map((article, i) => {
      return (
        <NewsArticle
        key={i}
        id={article.name}
        img={article.img}
        headline={article.headline}
        description={article.description}
        url={article.url}
        />
      )
    })
  }
  render() {
    return (
      <section className="newsContainer">
        {this.renderNewsArticles()}
      </section>
    );
  }
}

export default NewsContainer;
