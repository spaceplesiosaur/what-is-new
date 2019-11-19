import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import SearchForm from '../SearchForm/SearchForm.js';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm/>
        <Menu/>
        <NewsContainer
        articleList={this.state.local}
        // id={this.state.name}
        // img={this.state.image}
        // description={this.state.description}
        // url={this.state.url}
        />
      </div>
    );
  }
}


export default App;
