import React from 'react';
import trybetunes from '../images/logo.png';
import FormEnter from '../components/FormEnter';
import useAppContext from '../hooks/useAppContext';

function Login() {
  const { checkInput,
    checkLogin,
  } = useAppContext();

  return (
    <div
      className="flex flex-wrap min-h-screen
    w-full content-center justify-center py-10"
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
    </div>
  );
}

export default Login;
