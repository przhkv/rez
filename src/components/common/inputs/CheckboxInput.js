import React, { PropTypes } from 'react';

const CheckboxInput = ({disabled, name, label, onChange, theme, value}) => (
  <div className="mt2">
    <label className={'db fw6 lh-copy f6 ' + theme.commonText}>
      <input
        className="checkbox"
        disabled={disabled}
        type="checkbox"
        name={name}
        checked={value == 'true'}
        onChange={onChange}
      />
      <span className=" pl2">{label}</span>
    </label>
  </div>
);

CheckboxInput.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  value: PropTypes.string
};

export default CheckboxInput;
