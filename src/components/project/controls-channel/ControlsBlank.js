import React, { PropTypes } from 'react';
import { FILE, NOISE, OSCILLATOR, ROUTE } from '../../../constants/sequencer/channelLayoutTypes';
import {
  SELECT_FILE_TYPE,
  SELECT_NOISE_TYPE,
  SELECT_OSCILLATOR_TYPE,
  SELECT_ROUTE_TYPE
} from '../../../constants/sequencer/elements';

const ControlsBlank = ({i18n, indexOfChannel, setMouseOut, setMouseOver, theme, updateProject}) => {
  const typeHelp = {
    [FILE]: SELECT_FILE_TYPE,
    [NOISE]: SELECT_NOISE_TYPE,
    [OSCILLATOR]: SELECT_OSCILLATOR_TYPE,
    [ROUTE]: SELECT_ROUTE_TYPE
  };
  const mouseOver = type => setMouseOver(typeHelp[type]);
  const updateChannelType = type => updateProject(['channels', indexOfChannel, 'type'], type);

  const typeLinks =
    [FILE, NOISE, OSCILLATOR, ROUTE]
      .map(type => ({
        name: type,
        onClick: () => {
          setMouseOut();
          updateChannelType(type);
        },
        onMouseOver: () => mouseOver(type)
      }))
      .map((t, i) => (
        <div
          key={i}
          className="h3 w4 fl br4 pv4 mv4 mh2 tc bg-light-gray pointer"
          onClick={t.onClick}
          onMouseOut={setMouseOut}
          onMouseOver={t.onMouseOver}
        >
          <span className="black-70">{t.name}</span>
        </div>
      ));

  return (
    <div className="w-100">
      {typeLinks}
    </div>
  );
};

ControlsBlank.propTypes = {
  i18n: PropTypes.object.isRequired,
  indexOfChannel: PropTypes.number.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ControlsBlank;
