import React, { PropTypes } from 'react';

const ToolbarButton = ({disabled, onClick, onMouseOver, onMouseOut, text, theme}) => {
  const
    classesClear = 'outline-0 input-reset',
    classesColors = 'bg-white-90 black-70',
    classesState = disabled ? 'o-50' : 'rez-weak-dim pointer',
    linkClasses = `f6 br-pill dib bn ph2 ${classesClear} ${classesColors} ${classesState}`;

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
