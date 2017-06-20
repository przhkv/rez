import React from 'react';
import PropTypes from 'prop-types';
import { EDIT, EXPAND, MUTE, SOLO } from '../../../constants/sequencer/panelButtonTypes';

const ChannelButton = ({active, onClick, onMouseOut, onMouseOver, theme, type}) => {
  const button = {
    [EDIT]: {
      color: active ? 'washed-red bg-dark-pink' : 'dark-pink bg-washed-red',
      text: 'e',
    },
    [EXPAND]: {
      color: 'light-yellow bg-orange',
      text: active ? '-' : '+',
    },
    [MUTE]: {
      color: active ? 'washed-red bg-red' : 'red bg-washed-red',
      text: 'm',
    },
    [SOLO]: {
      color: active ? 'lightest-blue bg-dark-blue' : 'dark-blue bg-lightest-blue',
      text: 's',
    },
  };

  const clear = 'bn br-pill outline-0 input-reset rez-weak-dim pointer';

  return (
    <input
      className={`f6 br4 ph2 dib ${button[type].color} ${clear}`}
      onClick={onClick}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      type="button"
      value={button[type].text}
    />
  );
};

ChannelButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  theme: PropTypes.object.isRequired,
  type: PropTypes.oneOf([EDIT, EXPAND, MUTE, SOLO]).isRequired,
};

export default ChannelButton;
