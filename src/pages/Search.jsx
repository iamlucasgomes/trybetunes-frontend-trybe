import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search
  extends Component {
  render() {
    const { checkSearchInput, checkSearch } = this.props;
    return (
      <div data-testid="page-search">
        <form>
          <input
            type="text"
            name="inputSearch"
            data-testid="search-artist-input"
            onChange={ checkSearchInput }
          />
          <input
            type="button"
            value="Pesquisar"
            data-testid="search-artist-button"
            disabled={ checkSearch }
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  checkSearchInput: PropTypes.func.isRequired,
  checkSearch: PropTypes.bool.isRequired,
};

export default Search;
