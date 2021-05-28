import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <button class="ui youtube button">
            <i class="youtube icon big"></i>
            YouTube
          </button>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Szukaj"
              className="input-bar"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
