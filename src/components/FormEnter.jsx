import PropTypes from 'prop-types';
import InputName from './InputName';
import ButtonEnter from './ButtonEnter';

export default function FormEnter(props) {
  const { checkInput, handleClickLogin, checkLogin } = props;
  return (
    <form className="mt-4">
      <InputName checkInput={ checkInput } />
      <ButtonEnter handleClickLogin={ handleClickLogin } checkLogin={ checkLogin } />
    </form>
  );
}

FormEnter.propTypes = {
  checkInput: PropTypes.func,
  handleClickLogin: PropTypes.func,
}.isRequired;
