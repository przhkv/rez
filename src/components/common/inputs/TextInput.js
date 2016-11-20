import React, { PropTypes } from 'react';
import inputTypes from '../../../constants/components/inputTypes';

const TextInput = ({disabled, error, label, name, onChange, type, value}) => {
  return (
    <div className="mt2 mw5">
      <label className="db fw6 lh-copy f6 black-70" htmlFor={'textID' + name}>{label}</label>
      <input
        className="pa2 input-reset ba b--black-40 bg-transparent hover-bg-near-white w-100"
        id={'textID' + name}
        name={name}
        onChange={onChange}
        type={type || inputTypes.TEXT}
        value={value}
      />
    </div>
  );
};

TextInput.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;
