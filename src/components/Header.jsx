import React, { Component } from 'react';
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

  render() {
    const { loader, user } = this.state;
    return (
      <div data-testid="header-user-name">
        {loader && <Loading />}
        <header data-testid="header-component">{user}</header>
      </div>
    );
  }
}

export default Header;
