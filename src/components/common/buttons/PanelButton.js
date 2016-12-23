import React, { PropTypes } from 'react';
import { EDIT, EXPAND, MUTE, SOLO } from '../../../constants/sequencer/panelButtonTypes';

const PanelButton = ({active, onClick, onMouseOut, onMouseOver, theme, type}) => {
  const button = {
    [EDIT]: {
      color: active ? 'bg-purple' : 'bg-light-purple',
      text: 'e'
    },
    [EXPAND]: {
      color: 'bg-orange',
      text: active ? '-' : '+'
    },
    [MUTE]: {
      color: active ? 'bg-red' : 'bg-washed-red',
      text: 'm'
    },
    [SOLO]: {
      color: active ? 'bg-blue' : 'bg-light-blue',
      text: 's'
    }
  };

  const clear = 'bn outline-0 input-reset rez-dim pointer';

  return (
    <input
      className={`f6 link br4 ph2 dib white ${button[type].color} ${clear}`}
      onClick={onClick}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      type="button"
      value={button[type].text}
    />
  );
};

PanelButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  theme: PropTypes.object.isRequired,
  type: PropTypes.oneOf([EDIT, EXPAND, MUTE, SOLO]).isRequired
};

export default PanelButton;
