import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';

class Login extends Component {
  render() {
    const {
      checkInput,
      handleClick,
      isButtonDisabled,
      removeLoader,
      redirect,
    } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <input
            type="text"
            name="inputName"
            data-testid="login-name-input"
            onChange={ checkInput }
          />
          <input
            type="button"
            value="Entrar"
            data-testid="login-submit-button"
            onClick={ handleClick }
            disabled={ isButtonDisabled }
          />
          {
            removeLoader && <Loading />
          }
          {
            redirect && <Redirect to="/search" />
          }
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  checkInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  removeLoader: PropTypes.bool.isRequired,
  redirect: PropTypes.bool.isRequired,
};

export default Login;
