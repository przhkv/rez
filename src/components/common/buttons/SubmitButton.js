import React, { PropTypes } from 'react';
import { NEUTRAL_LIGHT, SUBMIT } from '../../../constants/components/buttonStyles';

const getStyleClasses = (buttonStyle, theme) => {
  switch(buttonStyle) {
    case NEUTRAL_LIGHT:
      return 'ba ' + theme.buttonNeutralLight;
    default:
      return 'bn ' + theme.buttonSuccess;
  }
};

const SubmitButton = ({buttonStyle, disabled, onClick, text, theme}) => {
  const click = e => {e.preventDefault(); onClick();};
  const colors = getStyleClasses(buttonStyle, theme);
  const stateStyles = disabled ? ' o-50' : ' rez-dim pointer';

  return (
    <input
      className={'f6 br-pill ph3 pv2 mb2 dib mt3 outline-0 input-reset ' + colors + stateStyles}
      disabled={disabled}
      onClick={click}
      type="submit"
      value={text}
    />
  );
};

SubmitButton.propTypes = {
  buttonStyle: PropTypes.oneOf([NEUTRAL_LIGHT, SUBMIT]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default SubmitButton;
