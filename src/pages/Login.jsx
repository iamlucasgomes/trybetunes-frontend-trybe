// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import Loading from '../components/Loading';

// class Login extends Component {
//   render() {
//     const {
//       checkInput,
//       handleClickLogin,
//       checkLogin,
//       removeLoader,
//       redirect,
//     } = this.props;
//     return (
//       <div className="flex justify-center mx-20" data-testid="page-login">
//         <form>
//           <div>
//             <input
//             />
//           </div>
//           <div>
//             <input
//               type="button"
//               value="Entrar"
//               data-testid="login-submit-button"
//               onClick={ handleClickLogin }
//               disabled={ checkLogin }
//             />
//           </div>
//           {
//             removeLoader && <Loading />
//           }
//           {
//             redirect && <Redirect to="/search" />
//           }
//         </form>
//       </div>
//     );
//   }
// }

// Login.propTypes = {
//   checkInput: PropTypes.func.isRequired,
//   handleClickLogin: PropTypes.func.isRequired,
//   checkLogin: PropTypes.bool.isRequired,
//   removeLoader: PropTypes.bool.isRequired,
//   redirect: PropTypes.bool.isRequired,
// };

// export default Login;

import React from 'react';
import PropTypes from 'prop-types';
import trybetunes from '../images/trybetunes.png';
import FormEnter from '../components/FormEnter';

function Login(props) {
  const {
    checkInput,
    handleClickLogin,
    checkLogin,
    redirect,
  } = props;
  return (
    <div
      className="flex flex-wrap min-h-screen
    w-full content-center justify-center bg-gray-200 py-10"
    >
      <div className="flex shadow-md">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
          style={ { width: '24rem', height: '32rem' } }
        >
          <div className="w-72">
            <img src={ trybetunes } alt="logo" />
            <FormEnter
              checkInput={ checkInput }
              handleClickLogin={ handleClickLogin }
              checkLogin={ checkLogin }
            />
          </div>
        </div>

        <div
          className="flex flex-wrap content-center justify-center rounded-r-md"
          style={ { width: '24rem', height: '32rem' } }
        >
          <img
            alt="homem negro ouvindo musica"
            className="w-full h-full
            bg-center bg-no-repeat bg-cover rounded-r-md object-cover"
            src="https://rockinbh.com.br/wp-content/uploads/2022/03/ilias-chebbi-2gpfqhEFVZ8-unsplash-1024x613.jpg"
          />
        </div>
      </div>
      {
        redirect && <Redirect to="/search" />
      }
    </div>
  );
}

export default Login;

Login.propTypes = {
  checkInput: PropTypes.func.isRequired,
  handleClickLogin: PropTypes.func.isRequired,
  checkLogin: PropTypes.bool.isRequired,
  redirect: PropTypes.bool.isRequired,
};
