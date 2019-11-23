import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ""
    }
  }
  updateInput = event => {
    this.setState({searchInput: event.target.value})
  }

  filterStories = event => {
    this.props.filterArticles(this.state.searchInput.toUpperCase());
    event.target.previousSibling.value = ""
    this.setState({searchInput: event.target.previousSibling.value})
  }

  render() {
    return (
      <section className="navBar">
        <input type="text" className="searchBox" onChange={event => this.updateInput(event)}/>
        <button onClick={this.filterStories} tabIndex="0">Search Articles</button>
      </section>
    )
  }
}

export default SearchForm;
