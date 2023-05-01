import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import logo from '../images/logo-mini.png';

function Header() {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const { name } = await getUser();
      setUser(name);
      setLoader(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { name, image } = await getUser();
      setUser(name);
      setAvatar(image);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loader && <Loading />}
      <nav className="flex justify-around items-center w-screen bg-black shadow-lg">
        <div className="p-1 sm:w-1/5">
          <div className="text-white text-center p-0 font-light flex">
            <img className="h-6 w-6 rounded-full" src={ logo } alt="logo" />
            <Link to="/search" data-testid="link-to-search">Inicio</Link>
          </div>
        </div>
        <div className="dropdown cursor-pointer p-1 mr-2 flex items-center">
          <div className="">
            <img className="h-6 w-6 rounded-full" src={ avatar } alt="avatar" />
          </div>
          <div className="">
            <span className="text-white text-sm font-light ml-1">{user}</span>
          </div>
          <div className="rounded-md shadow-sm flex">
            <ul
              className="dropdown-menu absolute w-48 bg-white
            rounded-lg shadow-xl mt-5 -ml-48 hidden sm:mr-24
            md:mr-32 lg:mr-48 xl:mr-64s"
            >
              <li className="">
                <Link
                  to="/profile"
                  className="rounded-t text-gray-800
                hover:bg-gray-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Perfil

                </Link>

              </li>
              <li className="">
                <Link
                  to="/favorites"
                  className="text-gray-800 hover:bg-gray-600
                  hover:text-white py-2 px-4 block whitespace-no-wrap"
                  data-testid="link-to-favorites"
                >
                  Favoritos

                </Link>

              </li>
              <li className="">
                <Link
                  className="rounded-b text-gray-800 hover:bg-gray-600
                hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/"
                >
                  Sair

                </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
