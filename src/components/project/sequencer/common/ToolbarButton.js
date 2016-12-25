import React, { PropTypes } from 'react';

const ToolbarButton = ({disabled, onClick, onMouseOver, onMouseOut, text, theme}) => {
  const
    _state = disabled ? 'o-50' : 'pointer ',
    _clear = 'outline-0 input-reset rez-weak-dim',
    _colors = 'bg-white-90 black-70',
    linkClasses = `f6 br-pill dib bn ph2 ${_state} ${_clear} ${_colors}`;

  return (
    <input
      className={linkClasses}
      disabled={disabled}
      onClick={onClick}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      type="button"
      value={text}
    />
  );
};

ToolbarButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default ToolbarButton;
