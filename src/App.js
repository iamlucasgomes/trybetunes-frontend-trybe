import React from 'react';
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

class App extends React.Component {
  state = {
    inputName: '',
    inputSearch: '',
    artistSought: '',
    checkLogin: true,
    checkSearch: true,
    removeLoader: false,
    redirect: false,
    albums: [],
    results: false,
    favorites: [],
  };

  async componentDidMount() {
    this.setState({
      favorites: await getFavoriteSongs(),
    });
  }

  checkInputNameField = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        checkLogin: (value.length < Number('3')),
      });
    });
  };

  checkInputSearchField = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
      artistSought: value,
    }, () => {
      this.setState({
        checkSearch: (value.length < Number('2')),
      });
    });
  };

  handleClickLogin = async () => {
    const { inputName } = this.state;
    this.setState(() => ({
      removeLoader: true,
    }));
    await createUser(
      {
        name: inputName,
      },
    );
    this.setState(() => ({
      redirect: true,
    }));
  };

  handleClickSearch = async () => {
    const { inputSearch } = this.state;
    this.setState({
      inputSearch: '',
      albums: await searchAlbumsAPI(inputSearch),
    }, () => {
      this.setState({
        results: true,
      });
    });
  };

  render() {
    const { checkLogin,
      removeLoader,
      redirect,
      checkSearch,
      inputSearch,
      albums,
      results,
      artistSought,
      favorites,
    } = this.state;
    return (
      <BrowserRouter>
        <Header removeLoader={ removeLoader } />

        <Switch>
          <Route
            path="/album/:id"
            render={ (props) => <Album { ...props } /> }
          />
          <Route
            path="/search"
            render={ () => (<Search
              checkSearchInput={ this.checkInputSearchField }
              checkSearch={ checkSearch }
              inputSearch={ inputSearch }
              handleClickSearch={ this.handleClickSearch }
              albums={ albums }
              results={ results }
              artistSought={ artistSought }
            />) }
          />
          <Route
            path="/favorites"
            render={ () => (<Favorites favorites={ favorites } />) }
          />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route
            exact
            path="/"
            render={ () => (<Login
              checkInput={ this.checkInputNameField }
              checkLogin={ checkLogin }
              handleClickLogin={ this.handleClickLogin }
              removeLoader={ removeLoader }
              redirect={ redirect }
            />) }
          />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
