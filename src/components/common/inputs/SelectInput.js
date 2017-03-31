import React, { PropTypes } from 'react';

const SelectInput = ({defaultOption, disabled, label, name, onChange, options, theme, value}) => (
  <div className="mt2 mw5">
    <label
      className={`db fw6 lh-copy f6 ${theme.commonText}`}
      htmlFor={`selectID${name}`}
    >
      {label}
    </label>
    <select
      className={`pa2 ba w-100 pointer ${theme.articleInput}`}
      id={`selectID${name}`}
      name={name}
      value={value}
      onChange={onChange}
    >
      {defaultOption && <option value="">{defaultOption}</option>}
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.text}</option>
      ))}
    </select>
  </div>
);

SelectInput.propTypes = {
  defaultOption: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.object.isRequired,
  value: PropTypes.string
};

export default SelectInput;
