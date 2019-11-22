import React, { Component } from 'react';
// import local from '../../data/local';
// import entertainment from '../../data/entertainment';
// import health from '../../data/health';
// import science from '../../data/science';
// import technology from '../../data/technology';
import './App.css';
import SearchForm from '../SearchForm/SearchForm.js';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
  
      topic: [],

      menu:
        [
          {name: 'Entertainment', image: '/favicon.ico', id: []},
          {name: 'Health', image: '/favicon.ico', id: []},
          {name: 'Local News', image: '/favicon.ico', id: []},
          {name: 'Science', image: '/favicon.ico', id: []},
          {name: 'Technology', image: '/favicon.ico', id: []}
        ]

    }
  }
  componentDidMount = () => {
   fetch('https://whats-new-api.herokuapp.com/api/v1/news')
     .then(response => response.json())
     .then(data => this.setState({ topic: data.local, menu: this.state.menu.map((item, i) => {
       return {name: item.name, image: item.image, id: data[Object.keys(data)[i]]}
     })
   }));
 }
  setTopic = (topicId) => {
    this.setState({topic: topicId})
  }

  filterArticles = (search) => {
     const filteredTopic = [...this.state.topic].filter(article => {
      return article.headline.includes(search) ||
      article.description.includes(search);
    })
    this.setState({topic: filteredTopic})
  }

  render () {
    return (
      <div className="app">
        <Menu
        menuItems={this.state.menu}
        setTopic={this.setTopic}
        />
        <SearchForm
        filterArticles={this.filterArticles}
        />
        <NewsContainer
        articleList={this.state.topic}
        />
      </div>
    );
  }
}


export default App;
