import useAppContext from '../hooks/useAppContext';

export default function InputName() {
  const { setInputName, inputName } = useAppContext();

  const checkInputNameField = ({ target }) => {
    const { value } = target;
    setInputName(value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        name="inputName"
        data-testid="login-name-input"
        value={ inputName }
        onChange={ ({ target }) => checkInputNameField({ target }) }
        placeholder="Insira seu nome"
        className="block w-full rounded-md border border-gray-300
                  focus:border-purple-700 focus:outline-none focus:ring-1
                  focus:ring-purple-700 py-1 px-1.5 text-gray-500"
      />
    </div>
  );
}
