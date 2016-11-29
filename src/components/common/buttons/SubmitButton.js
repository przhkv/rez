import React, { PropTypes } from 'react';
import { NEUTRAL_LIGHT, SUBMIT } from '../../../constants/components/buttonStyles';

const SubmitButton = ({buttonStyle, disabled, onClick, onMouseOut, onMouseOver, text, theme}) => {
  const buttonClasses =  {
    [NEUTRAL_LIGHT]: `ba ${theme.buttonNeutralLight}`,
    [SUBMIT]: `bn ${theme.buttonSuccess}`
  };

  const click = e => {
    e.preventDefault();
    onClick();
  };
  const color = buttonClasses[buttonStyle || SUBMIT];
  const state = disabled ? ' o-50' : ' rez-dim pointer';

  return (
    <input
      className={`f6 br-pill ph3 pv2 mb2 dib mt3 outline-0 input-reset ${color} ${state}`}
      disabled={disabled}
      onClick={click}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      type="submit"
      value={text}
    />
  );
};

SubmitButton.propTypes = {
  buttonStyle: PropTypes.oneOf([NEUTRAL_LIGHT, SUBMIT]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default SubmitButton;
