import React, { PropTypes } from 'react';
import { NEUTRAL_LIGHT, SUBMIT } from '../../../constants/components/buttonStyles';

const SubmitButton = ({buttonStyle, disabled, inline, onClick, onMouseOut, onMouseOver, text, theme}) => {
  const buttonClasses =  {
    [NEUTRAL_LIGHT]: `ba ${theme.buttonNeutralLight}`,
    [SUBMIT]: `bn ${theme.buttonSuccess}`
  };

  const click = e => {
    e.preventDefault();
    onClick();
  };
  const
    color = buttonClasses[buttonStyle || SUBMIT],
    margin = inline ? 'pv1' : 'pv2 mb2 mt3',
    state = disabled ? ' o-50' : ' rez-dim pointer';

  return (
    <input
      className={`f6 br-pill dib outline-0 input-reset ph3 ${color} ${margin} ${state}`}
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
  inline: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default SubmitButton;
