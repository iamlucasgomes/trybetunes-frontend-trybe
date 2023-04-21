import PropTypes from 'prop-types';
import InputName from './InputName';
import ButtonEnter from './ButtonEnter';

export default function FormEnter() {
  return (
    <form className="mt-4">
      <InputName />
      <ButtonEnter />
    </form>
  );
}

FormEnter.propTypes = {
  checkInput: PropTypes.func,
  handleClickLogin: PropTypes.func,
}.isRequired;
