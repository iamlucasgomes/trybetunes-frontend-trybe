import PropTypes from 'prop-types';

export default function ButtonEnter(props) {
  const { handleClickLogin, checkLogin } = props;
  return (
    <div className="mb-3">
      <button
        type="button"
        className="mb-1.5 block w-full text-center text-white bg-orange-500
                hover:bg-orange-900 px-2 py-1.5 rounded-md"
        onClick={ handleClickLogin }
        disabled={ checkLogin }
      >
        Entrar
      </button>
    </div>
  );
}

ButtonEnter.propTypes = {
  handleClickLogin: PropTypes.func.isRequired,
  checkLogin: PropTypes.bool.isRequired,
};
