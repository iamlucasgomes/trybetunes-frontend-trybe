import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Login from './pages/Login';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import { createUser } from './services/userAPI';
import Header from './components/Header';
import searchAlbumsAPI from './services/searchAlbumsAPI';
import { getFavoriteSongs } from './services/favoriteSongsAPI';

function App() {
  const [inputName, setInputName] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [artistSought, setArtistSought] = useState('');
  const [checkLogin, setCheckLogin] = useState(true);
  const [checkSearch, setCheckSearch] = useState(true);
  const [removeLoader, setRemoveLoader] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [results, setResults] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const three = 3;

  useEffect(() => {
    async function fetchFavoriteSongs() {
      setFavorites(await getFavoriteSongs());
    }
    fetchFavoriteSongs();
  }, []);

  const checkInputNameField = ({ target }) => {
    const { value } = target;
    setInputName(value);
    setCheckLogin(value.length < three);
  };

  const checkInputSearchField = ({ target }) => {
    const { value } = target;
    setInputSearch(value);
    setArtistSought(value);
    setCheckSearch(value.length < 2);
  };

  const handleClickLogin = async () => {
    setRemoveLoader(true);
    await createUser({ name: inputName });
    setRedirect(true);
  };

  const handleClickSearch = async () => {
    setAlbums(await searchAlbumsAPI(inputSearch));
    setInputSearch('');
    setResults(true);
  };

  return (
    <BrowserRouter>
      <Header removeLoader={ removeLoader } />

      <Switch>
        <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
        <Route
          path="/search"
          render={ () => (
            <Search
              checkSearchInput={ checkInputSearchField }
              checkSearch={ checkSearch }
              inputSearch={ inputSearch }
              handleClickSearch={ handleClickSearch }
              albums={ albums }
              results={ results }
              artistSought={ artistSought }
            />
          ) }
        />
        <Route
          path="/favorites"
          render={ () => <Favorites favorites={ favorites } /> }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route
          exact
          path="/"
          render={ () => (
            <Login
              checkInput={ checkInputNameField }
              checkLogin={ checkLogin }
              handleClickLogin={ handleClickLogin }
              removeLoader={ removeLoader }
              redirect={ redirect }
            />
          ) }
        />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
