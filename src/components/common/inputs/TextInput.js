import React, { PropTypes } from 'react';

const TextInput = ({disabled, error, label, name, onChange, value}) => {
  return (
    <div className="mt3 mw5">
      <label className="db fw6 lh-copy f6 black-70" htmlFor={'id' + name}>{label}</label>
      <input
        className="pa2 input-reset ba b--black-40 bg-transparent hover-bg-near-white w-100"
        id={'id' + name}
        name={name}
        onChange={onChange}
        type="text"
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
  value: PropTypes.string,
};

export default TextInput;
