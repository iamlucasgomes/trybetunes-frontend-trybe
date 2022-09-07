import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  state = {
    userData: [],
  };

  async componentDidMount() {
    this.setState({
      userData: await getUser(),
    });
  }

  render() {
    const { userData } = this.state;
    const { name, image, description, email } = userData;
    return (
      <div data-testid="page-profile">
        <Link to="/profile/edit">Editar perfil</Link>
        <img src={ image } alt={ name } data-testid="profile-image" />
        <p>{name}</p>
        <p>{email}</p>
        <p>{description}</p>
      </div>
    );
  }
}

export default Profile;
