import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { SearchBarStyled } from './SearchBarStyled';

export const SearchBar = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  const handleKeyWordChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter a key-word ');
      return;
    }

    const onSuccess = onFormSubmit(query);

    if (onSuccess) {
      setQuery('');
    }
  };

  return (
    <SearchBarStyled>
      <form className="searchForm" onSubmit={handleFormSubmit}>
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
          onChange={handleKeyWordChange}
        />
      </form>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
