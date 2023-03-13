import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch, onReset }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputs = (e) => {
    const { value } = e.target;

    setSearchQuery(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onSearch(searchQuery);
  };

  const resetSearchFilter = () => {
    setSearchQuery('');
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="text-center" data-testid="search-form">
      <input
        type="text"
        className="form-input search-movie rounded px-5 py-2 w-96 mr-3 text-black"
        placeholder="Search a Movie"
        name="search"
        value={searchQuery}
        onChange={handleInputs}
        data-testid="search-movie"
        required
      />
      <button
        type="submit"
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded mr-3
						${searchQuery.length === 0 ? 'disabled:opacity-75' : 'hover:bg-blue-700'}
						`}
        disabled={!(searchQuery.length > 0)}>
        Search
      </button>
      <button
        onClick={resetSearchFilter}
        type="button"
        className="bg-gray-200 text-black font-bold py-2 px-4 rounded">
        Reset
      </button>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
  onReset: PropTypes.func
};

Search.defaultProps = {
  onSearch: () => {},
  onReset: () => {}
};

export default Search;
