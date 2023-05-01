import { useHistory } from 'react-router-dom';
import useAppContext from '../hooks/useAppContext';
import { createUser } from '../services/userAPI';

export default function ButtonEnter() {
  const history = useHistory();
  const { inputName } = useAppContext();
  const three = 3;

  const handleClickLogin = async () => {
    await createUser({ name: inputName, image: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png' });
    history.push('/search');
  };

  return (
    <div className="mb-3">
      <button
        type="button"
        className="mb-1.5 block w-full text-center text-white bg-yellow
                hover:bg-amber-500 px-2 py-1.5 rounded-md"
        onClick={ handleClickLogin }
        disabled={ inputName.length < three }
      >
        Entrar
      </button>
    </div>
  );
}
