import React, { PropTypes } from 'react';
import { NEUTRAL_LIGHT_PILL, SUBMIT } from '../../../constants/components/buttonStyles';

const getStyleClasses = buttonStyle => {
  switch(buttonStyle) {
    case NEUTRAL_LIGHT_PILL:
      return 'ba bg-white mid-gray';
    default:
      return 'bn bg-dark-green white';
  }
};

const SubmitButton = ({buttonStyle, disabled, onClick, text}) => {
  const click = e => {e.preventDefault(); onClick();};

  const colors = getStyleClasses(buttonStyle);
  const stateStyles = disabled ? ' o-50' : ' pointer';

  return (
    <input
      className={'f6 rez-dim br-pill ph3 pv2 mb2 dib mt3 outline-0 input-reset ' + colors + stateStyles}
      disabled={disabled}
      href="#"
      onClick={click}
      type="submit"
      value={text}
    />
  );
};

SubmitButton.propTypes = {
  buttonStyle: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default SubmitButton;
