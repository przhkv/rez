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
        <div key={i}>
          <a
            href="#"
            onClick={t.onClick}
            onMouseOut={setMouseOut}
            onMouseOver={t.onMouseOver}
          >
            {t.name}
          </a>
        </div>
      ));

  return (
    <div className="">
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
