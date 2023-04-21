import PropTypes from 'prop-types';

export default function InputName(props) {
  const { checkInput } = props;
  return (
    <div className="mb-3">
      <input
        type="text"
        name="inputName"
        data-testid="login-name-input"
        onChange={ checkInput }
        placeholder="Insira seu nome"
        className="block w-full rounded-md border border-gray-300
                  focus:border-purple-700 focus:outline-none focus:ring-1
                  focus:ring-purple-700 py-1 px-1.5 text-gray-500"
      />
    </div>
  );
}

InputName.propTypes = {
  checkInput: PropTypes.func.isRequired,
};
