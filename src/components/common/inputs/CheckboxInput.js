/* eslint-disable eqeqeq */
import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from '../../../utils/generatorUtils';

const CheckboxInput = ({disabled, name, label, onChange, theme, value}) => {
  const id = uuid(6);
  return (
    <div className="mt2">
      <label className={`db fw6 lh-copy f6 ${theme.commonText}`} htmlFor={id}>
        <input
          checked={value == 'true'}
          className="checkbox"
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
        />
        <span className="pl2">{label}</span>
      </label>
    </div>
  );
};

CheckboxInput.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  value: PropTypes.string,
};

export default CheckboxInput;
