import useAppContext from '../hooks/useAppContext';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default function SearchInput() {
  const {
    setAlbums,
    inputSearch,
    setInputSearch,
    setArtistSought,
    setHasAlbum,
  } = useAppContext();

  const two = 2;

  const handleClickSearch = async () => {
    const album = await searchAlbumsAPI(inputSearch);
    await setAlbums(album);
    setArtistSought(inputSearch);
    setInputSearch('');
    setHasAlbum(album.length === 0);
  };

  const inputSrc = ({ target }) => {
    const { value } = target;
    setInputSearch(value);
  };

  return (
    <div className="flex items-center justify-center p-5">
      <div className="w-full md:w-2/4 lg:w-2/4 xl:w-2/4 rounded-lg bg-gray-200 p-5 w-2/4">
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
          bg-emerald-500 hover:bg-emerald-600"
            data-testid="search-artist-button"
            onClick={ handleClickSearch }
            disabled={ inputSearch.length < two }
          />
        </div>
      </div>
    </div>
  );
}
