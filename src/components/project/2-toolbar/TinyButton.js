import React from 'react';
import PropTypes from 'prop-types';

const TinyButton = ({ active, disabled, onClick, onMouseOver, onMouseOut, text, theme }) => {
  const
    classesClear = 'outline-0 input-reset',
    classesColors = `${active ? 'bg-black-10' : 'bg-white-90'} black-70`,
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

TinyButton.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default TinyButton;
