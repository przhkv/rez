import React from 'react';
import PropTypes from 'prop-types';
import { NUMBER, TEXT } from '../../../constants/components/inputTypes';

const TextInput = ({disabled, error, label, name, onChange, type, theme, value}) => (
  <div className="mt2 mw5">
    <label
      className={`db fw6 lh-copy f6 ${theme.commonText}`}
      htmlFor={`textID${name}`}
    >
      {label}
    </label>
    <input
      className={`pa2 input-reset ba w-100 ${theme.articleInput}`}
      id={`textID${name}`}
      name={name}
      onChange={onChange}
      type={type || TEXT}
      value={value}
    />
  </div>
);

TextInput.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf([NUMBER, TEXT]),
  theme: PropTypes.object.isRequired,
  value: PropTypes.string,
};

export default TextInput;
