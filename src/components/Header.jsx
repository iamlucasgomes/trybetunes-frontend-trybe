import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  state = {
    loader: false,
    user: '',
  };

  async componentDidMount() {
    this.setState(() => ({
      loader: true,
    }));
    const { name } = await getUser();
    this.setState(() => ({
      loader: false,
      user: name,
    }));
  }

  async componentDidUpdate() {
    const { name } = await getUser();
    this.setState(() => ({
      user: name,
    }));
  }

  render() {
    const { loader, user } = this.state;
    return (
      <div data-testid="header-user-name">
        {loader && <Loading />}
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        <header data-testid="header-component">{user}</header>
      </div>
    );
  }
}

export default Header;
