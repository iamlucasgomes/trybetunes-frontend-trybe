import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardAlbum from '../components/CardAlbum';

class Search
  extends Component {
  render() {
    const { checkSearchInput,
      checkSearch,
      handleClickSearch,
      inputSearch,
      albums,
      results,
      artistSought,
    } = this.props;
    return (
      <div data-testid="page-search">
        <form>
          <input
            type="text"
            name="inputSearch"
            data-testid="search-artist-input"
            onChange={ checkSearchInput }
            value={ inputSearch }
          />
          <input
            type="button"
            value="Pesquisar"
            data-testid="search-artist-button"
            onClick={ handleClickSearch }
            disabled={ checkSearch }
          />
        </form>
        {
          results
          && <p>{`Resultado de álbuns de: ${artistSought}`}</p>
        }
        { albums.map(({
          artworkUrl100,
          collectionId,
          collectionName,
          artistName,
        }) => (<CardAlbum
          key={ collectionId }
          thumbnail={ artworkUrl100 }
          collectionId={ collectionId }
          collection={ collectionName }
          artist={ artistName }
        />))}
      </div>
    );
  }
}

Search.propTypes = {
  checkSearchInput: PropTypes.func.isRequired,
  checkSearch: PropTypes.bool.isRequired,
  handleClickSearch: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};

Search.propTypes = {
  albums: PropTypes.arrayOf.isRequired,
  artistSought: PropTypes.string.isRequired,
  results: PropTypes.bool.isRequired,

};

export default Search;
