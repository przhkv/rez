import { Map } from 'immutable';
import React from 'react';
import PropTypes from 'prop-types';
import ControlsList from './controls/ControlsList';
import Timeline from './timeline/Timeline';

const ChannelsGrid = ({ audioCtx, gainNode, i18n, project, save, setMouseOut, setMouseOver, theme,
                     updateProject }) =>
(
  <main id="seq" className={`flex-auto order-3 overflow-y-auto w-100 ${theme.bg}`}>
    <div className="fl w-100">
      <ControlsList {...{i18n, project, setMouseOut, setMouseOver, theme, updateProject}} />
      <Timeline {...{i18n, project, setMouseOut, setMouseOver, theme, updateProject}} />
    </div>
  </main>
);

ChannelsGrid.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ChannelsGrid;
