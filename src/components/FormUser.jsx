import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfilePic from './ProfilePic';
import { updateUser, getUser } from '../services/userAPI';
import Loading from './Loading';

class FormUser extends React.Component {
  state = {
    image: '',
    name: '',
    email: '',
    description: '',
    hasDisable: true,
    userData: [],
    redirect: false,
    isLoading: true,
  };

  async componentDidMount() {
    const userData = await getUser();
    this.setState({
      userData,
      image: userData.image,
      name: userData.name,
      email: userData.email,
      description: userData.description,
      isLoading: false,
    });
  }

  async componentDidUpdate() {
    this.setState({ userData: await getUser() });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { description, email, image, name } = this.state;
    updateUser({ description, email, image, name });

    this.setState({
      image: '',
      name: '',
      email: '',
      description: '',
      hasDisable: true,
      redirect: true,
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        // eslint-disable-next-line no-shadow
        const { description, email, image, name } = this.state;
        this.setState({
          hasDisable:
          description.length === 0
            || email.length === 0
            || image.length === 0
            || name.length === 0,
        });
      },
    );
  };

  // handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const imageUrl = URL.createObjectURL(file);
  //   this.setState({ image: imageUrl });
  // };

  render() {
    const {
      name,
      description,
      hasDisable,
      email,
      userData,
      image,
      redirect,
      isLoading,
    } = this.state;
    return (
      <div>
        <ProfilePic
          imageUrl={ userData.image }
          altText={ `profile-pic-${userData.name}` }
        />
        <label htmlFor="photo">
          Foto:
          <input
            data-testid="edit-input-image"
            type="url"
            id="photo"
            name="image"
            value={ image }
            onChange={ (e) => {
              this.handleInputChange(e);
            } }
          />
        </label>
        <br />
        <br />

        <label htmlFor="name">
          Nome:
          <input
            data-testid="edit-input-name"
            type="text"
            id="name"
            name="name"
            value={ name }
            onChange={ this.handleInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="email">
          Email:
          <input
            data-testid="edit-input-email"
            type="email"
            id="email"
            name="email"
            value={ email }
            onChange={ this.handleInputChange }
          />
        </label>
        <br />
        <br />

        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="edit-input-description"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleInputChange }
          />
        </label>
        <br />
        <br />

        <button
          disabled={ hasDisable }
          data-testid="edit-button-save"
          type="button"
          onClick={ this.handleSubmit }
        >
          Salvar
        </button>
        {isLoading && <Loading />}
        { redirect && <Redirect to="/profile" />}
      </div>
    );
  }
}

export default FormUser;
