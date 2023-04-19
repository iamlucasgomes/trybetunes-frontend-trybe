import React from 'react';
import ProfilePic from './ProfilePic';

class Formulario extends React.Component {
  state = {
    foto: '',
    nome: '',
    email: '',
    descricao: '',
    hasDisable: true,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      foto: '',
      nome: '',
      email: '',
      descricao: '',
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        const { descricao, email, foto, nome } = this.state;
        this.setState({
          hasDisable:
            descricao.length === 0
            || email.length === 0
            || foto.length === 0
            || nome.length === 0,
        });
      },
    );
  };

  render() {
    const { nome, email, descricao, foto, hasDisable } = this.state;
    return (
      <div>
        <ProfilePic photoSrc={ foto } altText={ `profile-pic-${nome}` } />
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="photo">
            Foto:
            <input
              data-testid="edit-input-image"
              type="file"
              id="photo"
              name="foto"
              value={ foto }
              onChange={ this.handleInputChange }
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
              name="nome"
              value={ nome }
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
              name="descricao"
              value={ descricao }
              onChange={ this.handleInputChange }
            />
          </label>
          <br />
          <br />

          <button
            disabled={ hasDisable }
            data-testid="edit-button-save"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Formulario;
