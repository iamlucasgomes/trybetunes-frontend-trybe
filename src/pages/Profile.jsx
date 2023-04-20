import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import ProfilePic from '../components/ProfilePic';

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
        <ProfilePic imageUrl={ image } altText={ name } />
        <div>
          <p>Nome:</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Email:</p>
          <p>{email}</p>
        </div>
        <div>
          <p>Descrição:</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
