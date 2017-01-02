import React, { PropTypes } from 'react';
import { FILLER, NEUTRAL_LIGHT, SUBMIT } from '../../../constants/components/buttonStyles';

const SubmitButton = ({buttonStyle, disabled, inline, onClick, onMouseOut, onMouseOver, text, theme}) => {
  const buttonClasses =  {
    [FILLER]: `f5 i h-100 w-100 bn`,
    [NEUTRAL_LIGHT]: `f6 ba ${theme.buttonNeutralLight}`,
    [SUBMIT]: `f6 bn ${theme.buttonSuccess}`
  };

  const click = e => {
    e.preventDefault();
    onClick();
  };
  const
    color = buttonClasses[buttonStyle || SUBMIT],
    margin = inline ? 'pv1' : 'pv2 mb2 mt3',
    state = disabled ? 'o-50' : 'rez-dim pointer';

  return (
    <input
      className={`br-pill dib outline-0 input-reset ph3 ${color} ${margin} ${state}`}
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
  buttonStyle: PropTypes.oneOf([FILLER, NEUTRAL_LIGHT, SUBMIT]),
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default SubmitButton;
