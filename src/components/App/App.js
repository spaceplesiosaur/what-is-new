import React, {
  Component
} from 'react';
import './App.css';
import SearchForm from '../SearchForm/SearchForm.js';
import Menu from '../Menu/Menu.js';
import NewsContainer from '../NewsContainer/NewsContainer.js';
//ALL IMAGES ARE FROM fontawesome.com

class App extends Component {
  constructor() {
    super();
    this.state = {

      topic: [],

      menu: [{
          name: 'Entertainment',
          image: '/film-solid.png',
          id: []
        },
        {
          name: 'Health',
          image: '/heart-solid.png',
          id: []
        },
        {
          name: 'Local News',
          image: '/map-marker-alt-solid.png',
          id: []
        },
        {
          name: 'Science',
          image: '/atom-solid.png',
          id: []
        },
        {
          name: 'Technology',
          image: '/cogs-solid.png',
          id: []
        }
      ]

    }
  }
  componentDidMount = () => {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => this.setState({
        topic: data.local,
        menu: this.state.menu.map((item, i) => {
          return {
            name: item.name,
            image: item.image,
            id: data[Object.keys(data)[i]]
          }
        })
      }));
  }
  setTopic = (topicId) => {
    this.setState({
      topic: topicId
    })
  }

  filterArticles = (search) => {
    const filteredTopic = [...this.state.topic].filter(article => {
      return article.headline.includes(search) ||
        article.description.includes(search);
    })
    this.setState({
      topic: filteredTopic
    })
  }

  render() {
    return (
      <div className="app" >
        <Menu
          menuItems={this.state.menu}
          setTopic={this.setTopic}
        />
        <section className="main">
          <SearchForm
          filterArticles={this.filterArticles}
          />
          <NewsContainer
          articleList={this.state.topic}
          />
        </section>
      </div>
    );
  }
}


export default App;
