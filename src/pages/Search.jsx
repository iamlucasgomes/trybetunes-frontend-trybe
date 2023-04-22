import React from 'react';
import { Link } from 'react-router-dom';
import CardAlbum from '../components/CardAlbum';
import useAppContext from '../hooks/useAppContext';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

function Search() {
  const {
    albums,
    artistSought,
  } = useAppContext();

  return (
    <div data-testid="page-search">
      <Header />
      <SearchInput />
      {
        albums.length > 0 && <p>{`Resultado de álbuns de: ${artistSought}`}</p>
      }
      {
        albums === [] && <p>Nenhum álbum foi encontrado</p>
      }
      { albums.map(({
        artworkUrl100,
        collectionId,
        collectionName,
        artistName,
      }) => (
        <Link
          to={ `/album/${collectionId}` }
          key={ `key:${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <CardAlbum
            key={ collectionId }
            thumbnail={ artworkUrl100 }
            collectionId={ collectionId }
            collection={ collectionName }
            artist={ artistName }
          />
        </Link>))}
    </div>
  );
}

export default Search;
