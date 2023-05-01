import useAppContext from '../hooks/useAppContext';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default function SearchInput() {
  const {
    setAlbums,
    inputSearch,
    setInputSearch,
    setArtistSought,
    setResults,
  } = useAppContext();

  const two = 2;

  const handleClickSearch = async () => {
    setAlbums(await searchAlbumsAPI(inputSearch));
    setArtistSought(inputSearch);
    setInputSearch('');
    setResults(true);
  };

  const inputSrc = ({ target }) => {
    const { value } = target;
    setInputSearch(value);
  };

  return (
    <div className="flex items-center justify-center p-5">
      <div className="rounded-lg bg-gray-200 p-5 w-2/4">
        <div className="flex">
          <input
            type="text"
            className="w-full bg-white pl-2 text-base font-semibold outline-0"
            placeholder="Procure seu artista"
            data-testid="search-artist-input"
            onChange={ ({ target }) => inputSrc({ target }) }
            value={ inputSearch }
          />
          <input
            type="button"
            value="Buscar"
            className="p-2 rounded-tr-lg rounded-br-lg
          text-white font-semibold transition-colors
          bg-yellow hover:bg-amber-500"
            data-testid="search-artist-button"
            onClick={ handleClickSearch }
            disabled={ inputSearch.length < two }
          />
        </div>
      </div>
    </div>
  );
}
