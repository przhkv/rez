import React, { PropTypes } from 'react';

const CheckboxInput = ({disabled, name, label, onChange, value}) => (
  <div className="">
    <div className="">
      <label className="">
        <input
          disabled={disabled}
          type="checkbox"
          name={name}
          checked={value == 'true'}
          onChange={onChange} />
        <b>{label}</b>
      </label>
    </div>
  </div>
);

CheckboxInput.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default CheckboxInput;
