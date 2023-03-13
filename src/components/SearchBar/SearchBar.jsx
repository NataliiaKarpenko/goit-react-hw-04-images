import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { SearchBarStyled } from './SearchBarStyled';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleKeyWordChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });

    // if (e.currentTarget.value.trim().length === 0) {
    //   this.props.onQueryChange(e.currentTarget.value);
    // }
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter a key-word ');
      return;
    }

    this.props.onFormSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchBarStyled>
        <form className="searchForm" onSubmit={this.handleFormSubmit}>
          <button type="submit" className="searchBtn">
            <ImSearch />
          </button>

          <input
            className="input"
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleKeyWordChange}
          />
        </form>
      </SearchBarStyled>
    );
  }
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  // onQueryChange: PropTypes.func.isRequired,
};
