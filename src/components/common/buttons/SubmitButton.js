import React, { PropTypes } from 'react';

const SubmitButton = ({disabled, onClick, text}) => {
  const click = e => {
    e.preventDefault();
    onClick();
  };
  const classes = 'f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-green mt3 input-reset bn' +
    (disabled ? ' o-50' : ' pointer');
  return (
    <input
      className={classes}
      disabled={disabled}
      href="#"
      onClick={click}
      type="submit"
      value={text}
    />
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default SubmitButton;
