import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import SearchForm from '../SearchForm/SearchForm.js';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      topic: local,
      menu:
        [
          {name: 'Local News', image: '/favicon.ico', id: local},
          {name: 'Technology', image: '/favicon.ico', id: technology},
          {name: 'Entertainment', image: '/favicon.ico', id: entertainment},
          {name: 'Science', image: '/favicon.ico', id: science},
          {name: 'Health', image: '/favicon.ico', id: health}
        ]

    }
  }

  setTopic = (topicId) => {
    this.setState({topic: topicId})
  }

  render () {
    return (
      <div className="app">
        <SearchForm/>
        <Menu
        menuItems={this.state.menu}
        setTopic={this.setTopic}/>
        <NewsContainer
        articleList={this.state.topic}
        />
      </div>
    );
  }
}


export default App;
