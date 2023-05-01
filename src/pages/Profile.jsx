import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import ProfilePic from '../components/ProfilePic';
import Loading from '../components/Loading';
import Header from '../components/Header';

class Profile extends Component {
  state = {
    userData: [],
    isLoading: true,
  };

  async componentDidMount() {
    this.setState({
      userData: await getUser(),
      isLoading: false,
    });
  }

  render() {
    const { userData, isLoading } = this.state;
    const { name, image, description, email } = userData;
    return (
      <main data-testid="page-profile">
        <Header />
        <section>
          <div>
            <ProfilePic imageUrl={ image } altText={ name } />
            <Link to="/profile/edit">
              Editar perfil
            </Link>
          </div>
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
        </section>
        {isLoading && <Loading />}
      </main>
    );
  }
}

export default Profile;
