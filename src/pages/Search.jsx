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
    <div className="bg-gray-900" data-testid="page-search">
      <Header />
      <SearchInput />
      <section className="p-5">
        {
          albums.length > 0
          && <p className="text-xl font-semibold text-white">
            {' '}
            {`Resultado de álbuns de: 
          ${artistSought}`}

          </p>
        }
        {
          albums === []
          && <p
            className="text-xl font-semibold
          text-gray-800"
          >
            Nenhum álbum foi encontrado
             </p>
        }
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-5">
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
      </section>
    </div>
  );
}

export default Search;
