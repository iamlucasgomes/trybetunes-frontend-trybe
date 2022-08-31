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

class App extends React.Component {
  state = {
    inputName: '',
    isButtonDisabled: true,
    removeLoader: false,
    redirect: false,
  };

  checkInputNameField = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        isButtonDisabled: (value.length < Number('3')),
      });
    });
  };

  handleClick = async () => {
    const { inputName } = this.state;
    this.setState(() => ({
      removeLoader: true,
    }));
    await createUser({ name: inputName });
    this.setState(() => ({
      redirect: true,
    }));
  };

  render() {
    const { isButtonDisabled, removeLoader, redirect } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
          <Route path="/search" component={ Search } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route
            exact
            path="/"
            render={ () => (<Login
              checkInput={ this.checkInputNameField }
              isButtonDisabled={ isButtonDisabled }
              handleClick={ this.handleClick }
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
