import { List, Map } from 'immutable';
import React, { PropTypes } from 'react';
import { BLANK } from '../../../constants/sequencer/channelLayoutTypes';

const Toolbar = ({channels, i18n, setMouseOut, setMouseOver, theme, updateProject}) => {
  const add = () =>
    updateProject(['channels'], channels.push(Map({
      i: channels.size,
      name: `channel ${channels.size + 1}`,
      type: BLANK
    })));

  return (
    <div className={`flex-none order-2 ${theme.bg}`}>
      <input type="button" onClick={add} value={'add channel'} />
    </div>
  );
};

Toolbar.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default Toolbar;