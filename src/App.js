import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Login from './pages/Login';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import { getFavoriteSongs } from './services/favoriteSongsAPI';
import useAppContext from './hooks/useAppContext';

function App() {
  const { favorites,
    setFavorites } = useAppContext();

  useEffect(() => {
    async function fetchFavoriteSongs() {
      setFavorites(await getFavoriteSongs());
    }
    fetchFavoriteSongs();
  }, [setFavorites]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
        <Route
          path="/search"
          render={ () => (
            <Search />
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
            <Login />
          ) }
        />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
