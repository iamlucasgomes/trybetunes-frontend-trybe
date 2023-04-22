import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import Context from './Context';

export const options = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

function Provider({ children }) {
  const [inputName, setInputName] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [artistSought, setArtistSought] = useState(false);
  const [checkLogin, setCheckLogin] = useState(true);
  const [checkSearch, setCheckSearch] = useState(true);
  const [removeLoader, setRemoveLoader] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [results, setResults] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const contextValue = useMemo(() => ({
    inputName,
    setInputName,
    inputSearch,
    setInputSearch,
    artistSought,
    setArtistSought,
    checkLogin,
    setCheckLogin,
    checkSearch,
    setCheckSearch,
    removeLoader,
    setRemoveLoader,
    albums,
    setAlbums,
    redirect,
    setRedirect,
    results,
    setResults,
    favorites,
    setFavorites,
  }), [
    albums,
    artistSought,
    checkLogin,
    checkSearch,
    favorites,
    inputName,
    inputSearch,
    redirect,
    removeLoader,
    results,
  ]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
