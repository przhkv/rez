import React, { PropTypes } from 'react';

const SelectInput = ({defaultOption, disabled, label, name, onChange, options, value}) => {
  return (
    <div className="mt2 mw5">
      <label className="db fw6 lh-copy f6 black-70" htmlFor={'selectID' + name}>{label}</label>
      <select
        id={'selectID' + name}
        name={name}
        value={value}
        onChange={onChange}
        className="pa2 ba b--black-40 bg-transparent hover-bg-near-white w-100 pointer">
        {defaultOption && <option value="">{defaultOption}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  defaultOption: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string
};

export default SelectInput;
